import React from 'react';
import { Header } from './component/header';
import { Balance } from './component/balance';
import { IncomeExpenses } from './component/Income';
import { TransactionList } from './component/TransactionList';
import { GlobalProvider } from './context/globalState';
import AddTransaction from './component/AddTransaction';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
