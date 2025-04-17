import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food"); // Default category
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name: expenseName,
      description,
      category,
      amount: parseFloat(amount),
      date,
    };
    addExpense(newExpense);

    setExpenseName("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="expense-form">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="food">Food</option>
          <option value="utilities">Utilities</option>
          <option value="clothing">Clothing</option>
          <option value="personal">Personal</option>
          <option value="growth">Growth</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
