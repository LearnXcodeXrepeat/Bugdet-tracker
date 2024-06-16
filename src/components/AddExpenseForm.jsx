import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../context/BudgetAndExpenseSlice';
import './AddExpenseForm.css';

function AddExpenseForm() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const amountNumber = parseFloat(amount);
        if (!isNaN(amountNumber)) {
            const newExpense = { id: Date.now(), name, amount: amountNumber };
            dispatch(addExpense(newExpense));
            setName('');
            setAmount('');
        } else {
            console.error('Invalid amount entered');
        }
    };

    return (
        <div className="add-expense-form">
            <h2>Add New Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Expense Name</label>
                    <input
                        type="text"
                        placeholder="Enter expense name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpenseForm;
