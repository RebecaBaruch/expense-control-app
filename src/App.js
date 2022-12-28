import Expenses from "./components/Expenses";

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

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
