import React from 'react';
import msonZoo from 'mson-zoo'
import fs from 'fs'
import path from 'path'
import protagonist from 'protagonist';
import parseMson from '../playground/parseMson'


import {Attributes} from '../src/index'

const fixtureLocation = path.join(__dirname, '../', 'fixtures');

if (!fs.existsSync(fixtureLocation)) {
    fs.mkdirSync(fixtureLocation);
}

msonZoo.samples.forEach((sample) => {

  parseMson(sample.code, (err, result) => {
    if (err) {
      console.error('Error during mson parse');
      process.exit(1);
    }

    const renderedElement = React.createElement(Attributes, {
      data: result
    });

    let htmlString = React.renderToString(renderedElement)
                          .replace(/ data-reactid="([^"]*)"/g)
                          .replace(/ data-react-checksum="([^"]*)"/g);

    fs.appendFileSync(path.join(fixtureLocation, sample.name), htmlString);
  })
});