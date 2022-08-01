import React from 'react';
import styles from './counter.css';

interface ICounter {
  clickPlus: () => void
  clickMinus: () => void
  onDelete: () => void
  value: number
}

export function Counter({clickPlus, clickMinus, onDelete, value}: ICounter) {
  return (
    <div className={styles.container}>
      <button onClick={clickMinus} className={styles.button}>-</button>
      <span>{value}</span>
      <button onClick={clickPlus} className={styles.button}>+</button>
      <button className={styles.delete} onClick={onDelete}>Delete</button>
    </div>
  );
}
