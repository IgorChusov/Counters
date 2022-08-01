import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterAdd, counterDelete, counterMinus, counterPlus, counterTimer } from '../../store/counters/actions';
import { ICounterData } from '../../store/counters/reduser';
import { RootState } from '../../store/reducer';
import { Counter } from '../Counter';
import { CounterTimer } from '../CounterTimer';
import { Text } from '../universalComponents/Text';
import { generateRandomString } from '../utils/generateRandomIndex';
import styles from './content.css';

export function Content() {
  const dispatch = useDispatch()
  const timer = useRef<null | NodeJS.Timer>(null)

  const counters = useSelector<RootState, ICounterData>(state => state.counters.data)

  const handleClickAdd = () => {
    const id = counters[counters.length - 1] ? counters[counters.length - 1].id + 1 : 0
    
    const value = counters.reduce(function (sum, current) {
      return Number(sum + current.value)
    }, 0)
    
    dispatch(counterAdd([...counters, {id: id, value: value, type: (counters.length + 1) % 4 === 0 && counters.length > 0 ? 'timer' : 'counter'} ]))
  }

  const handleClickChange = (id: number, value: number, method: 'plus' | 'minus') => {
    if(method === 'plus') {
      dispatch(counterPlus(id))
    } else if(method === 'minus') {
      dispatch(counterMinus(id))
    }
  }

  const handleClickDelete = (id: number) => {
    const newDate = counters.filter((elem) => (elem.id !== id))
    if(newDate)  {
      dispatch(counterDelete(newDate))
    }
  }

  const setTimer = () => {
    const newDateTimer = counters.map((elem) => {
     if(elem.type === 'timer') {
       elem.value = elem.value + 1
     }
     return elem
    })

    dispatch(counterTimer(newDateTimer))
   }

  useEffect(() => {
    if(counters.find((elem) => (elem.type === 'timer'))) {
      timer.current = setInterval(setTimer, 1000)
    } else {
      if(timer.current) {
        clearInterval(timer.current)
      }
    }
    return () => {
      if(timer.current) return clearInterval(timer.current)
    }
  }, [counters])

  return (
    <div className={styles.container}>
      <Text className={styles.title} As='h1' size={24}>The best counters list</Text>
      <button onClick={handleClickAdd} className={styles.button}>Add counter</button>
      {counters.map((elem) => (
        elem.type === 'timer'
          ? 
          <CounterTimer 
            key={generateRandomString()}
            value={elem.value} 
            onDelete={() => handleClickDelete(elem.id)}
           /> 
          : 
          <Counter 
            key={generateRandomString()}
            clickMinus={()=> handleClickChange(elem.id, elem.value, 'minus')} 
            clickPlus={() => handleClickChange(elem.id, elem.value, 'plus')} 
            onDelete={() => handleClickDelete(elem.id)}
            value={elem.value} 
          />
    ))}
    </div>
  );
}
