export type TransactionType = {
  id: number;
  title: string;
  amount: number;
};
export type TransactionsArray = {
  transaction?: TransactionsArray[];
};
