import React from 'react';
import classNames from 'classnames';

import Value from 'Value/Value';
import Attribute from 'Attribute/Attribute';

import {
  getValueType,
  isObjectOrArray,
  isObject,
  isArray
} from 'elements/element';


// If the value is an object or an array, the component
// does support expand/collapse functionality. In order
// to support such functionality we have to attach
// respective class names to the `.attributeObjectMember`
// element.
//
// `expanded`/`collapsed` to indicate the current state;
// `isObject`/`isArray` to state the type of the value, as
// each has a different background color; and so on.
const getExpandCollapseClassNames = (element, state) => {
  const valueType = getValueType(element);
  return classNames({
    'isExpanded': state.isExpanded,
    'isCollapsed': !state.isExpanded,
    'isExpandableCollapsible isObject': isObject(valueType),
    'isExpandableCollapsible isArray': isArray(valueType),
  });
};

const getValue = (element) => {
  let value;

  if (isObjectOrArray(element.element)) {
    value = <Attribute data={element} />;
  } else if (element.element === 'member') {
    if (isObjectOrArray(element.content.value.element)) {
      value = <Attribute data={element.content.value} />;
    } else if (element.content.value.content) {
      value = <Value value={element.content.value.content} />;
    } else {
      value = false;
    }
  } else if (element.content) {
    value = <Value value={element.content} />;
  } else {
    value = false;
  }

  return value;
};


export {
  getExpandCollapseClassNames,
  getValue
};