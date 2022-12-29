import React from "react";

import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Uno Duas portas',
      amount: 294.67,
      date: new Date(2021, 10, 28),
    },
    {
      id: 2,
      title: 'Headset Redragon',
      amount: 20.50,
      date: new Date(2021, 11, 10),
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expenses);
  }
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
