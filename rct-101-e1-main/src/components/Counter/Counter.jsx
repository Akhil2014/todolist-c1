import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setcount] = React.useState(0)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={() => setcount(count+1)} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={() => setcount(count-1)} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
