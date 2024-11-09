// ClockComponent.js
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'; // Optionally, import styles if necessary

function ClockComponent() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-4  rounded-lg flex flex-col items-center">
      <Clock value={value}  />
    </div>
  );
}

export default ClockComponent;
