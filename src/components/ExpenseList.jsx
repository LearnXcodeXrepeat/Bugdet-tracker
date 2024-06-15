// import React from 'react';
import './ExpenseList.css';

const expenses = [
    { id: 1, name: 'Groceries', amount: 50.00 },
    { id: 2, name: 'Rent', amount: 1200.00 },
    { id: 3, name: 'Utilities', amount: 200.00 },
    { id: 4, name: 'Internet', amount: 60.00 },
];

function ExpenseList() {
    return (
        <div className="expense-list">
            <h2>Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        <span>{expense.name}</span>
                        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
