import React,{ useContext } from 'react';
import { GlobalContext } from '../context/globalState'
import { TransactionType } from '../context/types'

export const Transaction: React.FC<TransactionType> =({ id,title,amount })=>{
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = amount < 0 ? '-' : '+';

  return(
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {title}
      <span>
        {sign} ${Math.abs(amount)}
      </span>
      <button onClick={()=>deleteTransaction(id)}
      className="delete-btn">delete</button>
    </li>
  )

}