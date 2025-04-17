import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  console.log("Expenses in App:", expenses);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
        <p>
          Start taking control of your finances and life. Success begins with
          clarity about your spending.
        </p>
      </header>
      <div className="app-content">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
