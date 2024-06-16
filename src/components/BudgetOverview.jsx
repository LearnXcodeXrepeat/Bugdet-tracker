import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBudget, } from '../context/BudgetAndExpenseSlice';
import './BudgetOverview.css';

function BudgetOverview() {
    const [newBudget, setNewBudget] = useState('');
    const dispatch = useDispatch();
    const { totalBudget, totalExpenses, remainingBudget } = useSelector(state => state.budget);

    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        const budgetNumber = parseFloat(newBudget);
        if (!isNaN(budgetNumber)) {
            dispatch(setBudget(budgetNumber));
            setNewBudget('');
        }
    };



    return (
        <div className="budget-container">
            <div className="budget-overview">
                <div className="budget-card">
                    <h2>Total Budget</h2>
                    <p className="budget-value">${totalBudget.toFixed(2)}</p>
                </div>
                <div className="budget-card">
                    <h2>Total Expenses</h2>
                    <p className="budget-value">${totalExpenses.toFixed(2)}</p>
                </div>
                <div className="budget-card">
                    <h2>Remaining Budget</h2>
                    <p className="budget-value">${remainingBudget.toFixed(2)}</p>
                </div>
            </div>
            <div className="add-budget-form">
                <form onSubmit={handleBudgetSubmit} className="budget-form">
                    <input
                        type="number"
                        className="budget-input"
                        placeholder="Enter new budget amount"
                        value={newBudget}
                        onChange={(e) => setNewBudget(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                    />
                    <button type="submit" className="budget-button">Set Budget</button>
                </form>




            </div>

        </div>
    );
}

export default BudgetOverview;
