import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { TransactionType } from './types';

const startState = {
  transactions: [{ id: 1, title: 'pizza', amount: 1000 }],
  addTransaction: (transaction: TransactionType) => {},
};

export const GlobalContext = createContext(startState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, startState);
  function addTransaction(transaction: TransactionType) {
    dispatch({
      type: 'add',
      transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
