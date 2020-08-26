import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );
  const income = transactionAmount
    .filter((i) => i > 0)
    .reduce((a, b) => a + b, 0);
  const expense = -transactionAmount
    .filter((i) => i < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="Expense-Container">
        <div>
          <h4>Income</h4>
          <p className="money-plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money-minus">${expense}</p>
        </div>
      </div>
    </div>
  );
};
