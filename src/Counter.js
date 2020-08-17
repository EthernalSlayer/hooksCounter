import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState();
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setCount(Number.parseInt(e.target.value));
  };

  useEffect(() => {
    if (Number.isInteger(count)) {
      setDisabled(false);
    }
  }, [count]);

  return (
    <div>
      <form>
        <label htmlFor="initialValue">choisis la valeur initial :</label>
        <input
          type="in"
          id="initialValue"
          value={count}
          onChange={handleChange}
        />
      </form>
      <p>Le compteur est à : {count}</p>
      <button disabled={disabled} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button disabled={disabled} onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount('')}>Reset</button>
    </div>
  );
};

export default Counter;
