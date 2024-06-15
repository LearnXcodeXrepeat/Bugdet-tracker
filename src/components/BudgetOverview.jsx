// import React from 'react';
import './BudgetOverview.css';

function BudgetOverview() {
    return (
        <div className="budget-overview">
            <div className="budget-card">
                <h2>Total Budget</h2>
                <p>$0.00</p>
            </div>
            <div className="budget-card">
                <h2>Total Expenses</h2>
                <p>$0.00</p>
            </div>
            <div className="budget-card">
                <h2>Remaining Budget</h2>
                <p>$0.00</p>
            </div>
        </div>
    );
}

export default BudgetOverview;
