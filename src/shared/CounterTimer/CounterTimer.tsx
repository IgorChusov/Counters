import React from 'react';
import styles from './countertimer.css';

interface ICounter {
  value: number
  onDelete: () => void
}

export function CounterTimer({value, onDelete}: ICounter) {

  return (
    <div className={styles.container}>
      <span>{value}</span>
      <button className={styles.delete} onClick={onDelete}>Delete</button>
    </div>
  );
}
