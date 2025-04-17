import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    Object.values(expense).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (!expenses || expenses.length === 0) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search expenses..."
          onChange={handleSearchChange}
          className="search-input"
        />
        <p>No expenses found!</p>
      </div>
    );
  }

  console.log("Expenses:", expenses);

  return (
    <div className="expense-list">
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
