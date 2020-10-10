import { TransactionType } from './types'

type Action = { type:'add';transaction:TransactionType; }| { type:'delete'; id:number }

export default (
  state:{ transactions:TransactionType[] },
  action:Action
)=>{
  switch(action.type){
    case 'add':
      return {
        ...state,
        transactions:[action.transaction,...state.transactions]
      }
    case 'delete':
      return {
        ...state,
        transactions:state.transactions.filter(
          (transaction) =>transaction.id !== action.id
        )
      }
    default:
      return state;
  }
}
