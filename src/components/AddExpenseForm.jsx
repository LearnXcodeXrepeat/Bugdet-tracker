import { useState } from 'react';
import './AddExpenseForm.css';

function AddExpenseForm() {
    const [productName, setProductName] = useState("")
    const [amount, setAmount] = useState("")
    return (
        <div className="add-expense-form">
            <h2>Add New Expense</h2>
            <form>
                <div className="form-control">
                    <label>Expense Name</label>
                    <input type="text" placeholder="Enter expense name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="text" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpenseForm;
