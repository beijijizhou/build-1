import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CountButton() {
  const [count, setCount] = useState(0);
  const backendUrl = `https://counter-test.onrender.com`;
  async function handleClick () {
    const response = await axios.get(`${backendUrl}/count`);

    setCount(response.data.counter);
  }
  useEffect(() => {
    async function fetchCount() {
      const response = await axios.get(`/`);
      console.log(response)
      setCount(response.data.counter);
    }
    fetchCount();
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click to increase the counter!</button>
    </div>
  );
}

export default CountButton;
