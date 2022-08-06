import { createContext } from "react";
import { useCallback, useReducer } from "react";
import initialState from "./initialState";
import { v4 as id } from "uuid";

export const GrudgeContext = createContext();

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";
const UNDO = "UNDO";
const REDO = "REDO";

const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    const newPresent = [{ ...action.payload }, ...state.present];
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: [],
    };
  }

  if (action.type === GRUDGE_FORGIVE) {
    const newPresent = state.present.map((grudge) => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: [],
    };
  }

  if (action.type === UNDO) {
    const [newPresent, ...newPast] = state.past;
    return {
      past: newPast,
      present: newPresent,
      future: [state.present, ...state.future],
    };
  }

  if (action.type === REDO) {
    const [newPresent, ...newFuture] = state.future;

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: newFuture,
    };
  }

  return state;
};

const defaultState = {
  past: [],
  present: initialState,
  future: [],
};

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const grudges = state.present;
  const isPast = !!state.past.length;
  const isFuture = !!state.future.length;

  const addGrudge = useCallback(
    ({ person, reason }) => {
      dispatch({
        type: GRUDGE_ADD,
        payload: {
          person,
          reason,
          forgiven: false,
          id: id(),
        },
      });
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({
        type: GRUDGE_FORGIVE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  const undo = useCallback(() => {
    dispatch({ type: UNDO });
  }, [dispatch]);

  const redo = useCallback(() => {
    dispatch({ type: REDO });
  }, [dispatch]);

  return (
    <GrudgeContext.Provider
      value={{
        grudges,
        addGrudge,
        toggleForgiveness,
        undo,
        redo,
        isPast,
        isFuture,
      }}
    >
      {children}
    </GrudgeContext.Provider>
  );
};
