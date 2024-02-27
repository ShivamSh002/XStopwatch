import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });
  const [pauseTime, setPauseTime] = useState(true);
  const [intervalId, setIntervalId] = useState();

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      if (newTime.sec < 59) {
        newTime.sec += 1;
      } else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }

      return newTime;
    });
  };

  const handleTime = () => {
    setPauseTime(!pauseTime);
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };

  return (
    <div>
      {" "}
      <h1> StopWatch </h1>{" "}
      <h2>
        {" "}
        {`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${
          time.min
        } : ${time.sec < 10 ? 0 : ""}${time.sec}`}{" "}
      </h2>{" "}
      <button on onClick={handleTime}>
        {" "}
        {pauseTime ? "Start" : "Pause"}{" "}
      </button>{" "}
      <button onClick={reset}> Reset </button>{" "}
    </div>
  );
};

export default App;
