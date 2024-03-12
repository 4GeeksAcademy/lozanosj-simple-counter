import React, { useState, useEffect } from 'react';

const Counterx = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Contador de segundos</h1>
      <p>{seconds}</p>
    </div>
  );
};

export default Counterx;



