import { Reducer } from "react";
import { CounterAddAction, CounterDeleteAction, CounterMinusAction, CounterPlusAction, CounterTimerAction, COUNTER_ADD, COUNTER_DELETE, MINUS_COUNTER, PLUS_COUNTER, TIMER_COUNTER } from "./actions";

export type ICounterData = {
  id: number
  value: number
  type?: 'timer' | 'counter'
}[]

export type CounterState = {
  data: ICounterData,
}

type CountersActions = CounterAddAction | CounterDeleteAction | CounterTimerAction | CounterMinusAction | CounterPlusAction


export const countersReducer: Reducer<CounterState, CountersActions> = (state, action) => {
  switch(action.type) {
    case COUNTER_ADD:
    case TIMER_COUNTER:
    case MINUS_COUNTER:
    case PLUS_COUNTER:
    case COUNTER_DELETE:
      return {
        ...state,
        data: action.value, 
      }
    default:
      return state
  }
}
