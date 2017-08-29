import React from 'react';

export default ({onStartWorkoutClicked}) =>
  <div className="absolute right-0 bottom-0 left-0 p4">
    <button
        type="button"
        className="btn btn-primary p2 col-12"
        onClick={onStartWorkoutClicked}>
      LETS GO
    </button>
  </div>;
