import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  const hDeg = h * 30 + m * (360 / 720);
  const mDeg = m * 6 + s * (360 / 3600);
  const sDeg = s * 6;

  return (
    <div className="clock">
      <div className="dot"></div>
      <div>
        <div className="hour-hand" style={{ transform: `rotate(${hDeg}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${mDeg}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${sDeg}deg)` }}></div>
      </div>
      <div>
        <span className="h3">3</span>
        <span className="h6">6</span>
        <span className="h9">9</span>
        <span className="h12">12</span>
      </div>
            {[...Array(60)].map((_, i) => {
              const rotationAngle = 6 * i - 6; // Shift each line by -6 degrees
              return (
                  <div key={i} className="diallines" style={{ transform: `rotate(${rotationAngle}deg)` }}></div>
              );
            })}

    </div>
  );
}

export default Clock;
