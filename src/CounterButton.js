import React, { useEffect, useState } from 'react';
import axios from 'axios';
function CountButton() {
  const [count, setCount] = useState(0);
  const backendUrl = "https://mapworkshop1.herokuapp.com/:8080";

  async function handleClick () {
    const response = await axios.get(`${backendUrl}/count`);
    setCount(count + 1);
  }
  useEffect(() => {
    async function fetchCount() {
      const response = await axios.get(`${backendUrl}`);
      console.log(response)
      setCount(response.data.counter);
    }
    fetchCount();
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default CountButton;
