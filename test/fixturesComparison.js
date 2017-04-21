import React from 'react';
import ReactDomServer from 'react-dom/server';
import msonZoo from 'mson-zoo';
import jsBeautify from 'js-beautify';
import fs from 'fs';
import path from 'path';
import assert from 'assert';
import drafter from 'drafter.js';
import get from 'lodash/get';

import { Attributes } from '../dist/attributes-kit';

const header = '# Data Structures';

describe('Comparison with reference fixtures', () => {
  msonZoo.samples.forEach((sample) => {
    describe(`If I render ${sample.fileName} on the server`, () => {
      let htmlString = null;
      let reference = null;

      before(() => {
        const dataStructureElements = get(drafter.parse(`${header}\n${sample.fileContent}`, {}), 'content[0].content[0].content', []).map(el => el.content[0]);

        const renderedElement = React.createElement(Attributes, {
          element: dataStructureElements[0],
          dataStructures: dataStructureElements,
          collapseByDefault: false,
          maxInheritanceDepth: undefined,
          includedProperties: 'show',
          inheritedProperties: 'show',
        });

        htmlString = jsBeautify.html(ReactDomServer.renderToStaticMarkup(renderedElement));

        reference = fs.readFileSync(
          path.join('./fixtures', `${sample.fileName}`),
          'utf8'
        );
      });

      it('They should be equal', () => {
        assert.equal(htmlString, reference);
      });
    });
  });
});
