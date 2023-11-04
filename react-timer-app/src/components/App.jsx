import React from "react";

function App() {
  setInterval(showtime, 1000);
  const tim = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, currTime] = React.useState(tim);

  function showtime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    currTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showtime}>Get Time</button>
    </div>
  );
}

export default App;
