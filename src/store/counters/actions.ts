import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { ICounterData } from "./reduser";

// add counter
export const COUNTER_ADD = 'COUNTER_ADD';
export type CounterAddAction ={
  type: typeof COUNTER_ADD;
  value: ICounterData;
}
export const counterAddAction: ActionCreator<CounterAddAction> = (value) => ({
  type: COUNTER_ADD,
  value: value
});

// delete counter
export const COUNTER_DELETE = 'COUNTER_DELETE';
export type CounterDeleteAction ={
  type: typeof COUNTER_DELETE;
  value: ICounterData;
}
export const counterDeleteAction: ActionCreator<CounterDeleteAction> = (value) => ({
  type: COUNTER_DELETE,
  value: value
});

// timer counter
export const TIMER_COUNTER = 'TIMER_COUNTER';
export type CounterTimerAction ={
  type: typeof TIMER_COUNTER;
  value: ICounterData;
}
export const counterTimerAction: ActionCreator<CounterTimerAction> = (value) => ({
  type: TIMER_COUNTER,
  value: value
});

// minus counter
export const MINUS_COUNTER = 'MINUS_COUNTER';
export type CounterMinusAction ={
  type: typeof MINUS_COUNTER;
  value: ICounterData;
}
export const counterMinusAction: ActionCreator<CounterMinusAction> = (value) => ({
  type: MINUS_COUNTER,
  value: value
});

// minus counter
export const PLUS_COUNTER = 'PLUS_COUNTER';
export type CounterPlusAction ={
  type: typeof PLUS_COUNTER;
  value: ICounterData;
}
export const counterPlusAction: ActionCreator<CounterPlusAction> = (value) => ({
  type: PLUS_COUNTER,
  value: value
});

export const counterTimer = (data: ICounterData) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(counterTimerAction(data))
}

export const counterAdd = (data: ICounterData) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(counterAddAction(data))
}

export const counterDelete = (data: ICounterData) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(counterDeleteAction(data));
}

export const counterPlus = (id: number) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const {counters: { data }} = getState();

  const newData = data.concat()
  const findElement = newData.findIndex((elem) => elem.id === id)
  newData[findElement].value = newData[findElement].value + 1
  dispatch(counterPlusAction([...newData]));
}

export const counterMinus = (id: number) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const {counters: { data }} = getState();

  const newData = data.concat()
  const findElement = newData.findIndex((elem) => elem.id === id)
  newData[findElement].value = newData[findElement].value - 1
  dispatch(counterMinusAction([...newData]));
}
