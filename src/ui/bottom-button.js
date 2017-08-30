import React from 'react';

export default ({onClick, children}) =>
  <div className="absolute right-0 bottom-0 left-0 p4">
    <button
        type="button"
        className="btn btn-primary p3 col-12"
        onClick={onClick}>
      {children}
    </button>
  </div>;
