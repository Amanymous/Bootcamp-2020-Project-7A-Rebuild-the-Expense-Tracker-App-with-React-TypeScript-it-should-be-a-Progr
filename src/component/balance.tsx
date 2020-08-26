import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );
  const balance = transactionAmount.reduce((a, b) => a + b, 0);
  return (
    <div className="balance">
      <h4>Balance:</h4>
      <h1>${balance}</h1>
    </div>
  );
};
