import React, { useEffect, useState } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseddTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      {" "}
      <h1> Stopwatch </h1> <p> Time: {formatTime(elapseddTime)} </p>{" "}
      <button onClick={startStop}> {isRunning ? "Stop" : "Start"} </button>{" "}
      <button onClick={reset}> Reset </button>{" "}
    </div>
  );
};

export default App;
