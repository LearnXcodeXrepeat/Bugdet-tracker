import { useSelector } from 'react-redux';
import './ExpenseList.css';

function ExpenseList() {
    const { expenses } = useSelector(state => state.budget);

    return (
        <div className="expense-list">
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li className="box" key={index}>
                        <div className='left'  >
                            {expense.name}
                        </div>
                        <div className="right">
                            ${expense.amount.toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
