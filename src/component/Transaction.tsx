import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import { TransactionType } from '../context/types';

export const Transaction: React.FC<TransactionType> = ({
  id,
  title,
  amount,
}) => {
  // const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount > 0 ? '+' : '-';
  return (
    <li className={amount > 0 ? 'plus' : 'minus'}>
      {title}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => id} className="delete-btn">
        x
      </button>
    </li>
  );
};
