import React from "react";
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
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
