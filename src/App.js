import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2022, 5, 28),
      title: "Groceries",
      price: 960.5,
    },
    {
      id: "e2",
      date: new Date(2022, 5, 30),
      title: "Documents",
      price: 10.77,
    },
    {
      id: "e3",
      date: new Date(2022, 6, 3),
      title: "Transport",
      price: 50,
    },
    {
      id: "e4",
      date: new Date(2022, 6, 6),
      title: "Rent",
      price: 299,
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
