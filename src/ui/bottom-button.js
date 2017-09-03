import React from 'react';

import mergeClasses from './merge-classes';

export default ({onClick, children, buttonClassName = ""}) =>
  <div className="p4 flex-none">
    <button
        type="button"
        className={mergeClasses("btn btn-primary p3 col-12", buttonClassName)}
        onClick={onClick}>
      {children}
    </button>
  </div>;
