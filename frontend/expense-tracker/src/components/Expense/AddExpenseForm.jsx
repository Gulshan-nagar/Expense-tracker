import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value });

  const handleSubmit = () => {
    if (!expense.category.trim()) {
      alert("Category is required!");
      return;
    }
    if (!expense.amount || isNaN(expense.amount) || Number(expense.amount) <= 0) {
      alert("Amount should be a valid number greater than 0.");
      return;
    }
    if (!expense.date) {
      alert("Date is required!");
      return;
    }

    onAddExpense({ ...expense, amount: Number(expense.amount) });

    // Form reset after successful submission
    setExpense({
      category: "",
      amount: "",
      date: "",
      icon: "",
    });
  };

  return (
    <div>
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />
      <Input
        value={expense.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />
      <Input
        value={expense.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={expense.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button type="button" className="add-btn add-btn-fill" onClick={handleSubmit}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
