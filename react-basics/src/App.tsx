import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selected, setSelected] = useState("");

  const [expenses, setExpense] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Utilities" },
    { id: 2, description: "bbb", amount: 90, category: "Groceries" },
    { id: 3, description: "ccc", amount: 108, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 200, category: "Utilities" },
  ]);

  const visibleExpenses = selected
    ? expenses.filter((e) => e.category === selected)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelected(category)} />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
