import { createStore } from "redux";
import { listReducer } from "../reducers/listReducer";

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('List', serializedState);
  } catch (error) {
    console.error('Could not save state', error);
  }
};


export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('List');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Could not load state', error);
    return undefined;
  }
};

const persistedState = loadStateFromLocalStorage();


export const store = createStore(listReducer,persistedState);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});