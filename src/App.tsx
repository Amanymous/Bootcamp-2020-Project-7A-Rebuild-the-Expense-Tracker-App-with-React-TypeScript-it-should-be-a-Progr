import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/Income';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/globalState';
import {AddTransaction} from './components/AddTransaction';
import { configureNotification } from './services/firebaseServices';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="App">
      <button onClick={configureNotification}>Configure Notification</button>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
  );
}

export default App;
