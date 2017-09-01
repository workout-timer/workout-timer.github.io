import React from 'react';

var merge = (...classNames) => Array.from(new Set(classNames
  .map(className => className.split(/\s+/))
  .reduce((all, className) => all.concat(className), []))
  .keys())
  .join(' ')

export default ({onClick, children, buttonClassName = ""}) =>
  <div className="absolute right-0 bottom-0 left-0 p4">
    <button
        type="button"
        className={merge("btn btn-primary p3 col-12", buttonClassName)}
        onClick={onClick}>
      {children}
    </button>
  </div>;
