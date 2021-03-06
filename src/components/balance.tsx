import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'

export const Balance = ()=>{
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) =>transaction.amount)
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
  return (
    <div className="total">
      <h4>Total:</h4>
      <h1>${total}</h1>
    </div>
  );
};