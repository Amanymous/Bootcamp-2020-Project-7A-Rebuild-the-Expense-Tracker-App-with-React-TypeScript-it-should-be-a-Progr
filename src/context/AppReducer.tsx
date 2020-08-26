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
      };
    default:
      return state;
  }
};
