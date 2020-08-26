import React, { useContext } from 'react';
import { Transaction } from '../component/Transaction';
import { GlobalContext } from '../context/globalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
};
