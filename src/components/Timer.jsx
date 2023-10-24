import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
    const mins = Math.floor(secondsRemaining / 60);
    const sec = secondsRemaining % 60;
  useEffect(
    function () {
        const id = setInterval(function () {
            dispatch({ type: "tick" });
        }, 1000);
        // the timer does never stop right new so we have to do cleanup function
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{mins < 10 && "0"}{mins}:{sec < 10 && "0"}{sec}</div>;
};

export default Timer;
