import { TransactionType } from '../context/types';

type Actions = { type: 'add'; transaction: TransactionType };

export default (
  state: { transactions: TransactionType[] },
  action: Actions
) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        transactions: [action.transaction, ...state.transactions],
      };
    default:
      return state;
  }
};
