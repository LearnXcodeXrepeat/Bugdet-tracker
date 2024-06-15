import { combineReducers } from 'redux';

// Budget Reducer
const initialBudgetState = {
    totalBudget: 0,
    totalExpenses: 0,
    remainingBudget: 0,
};

const budgetReducer = (state = initialBudgetState, action) => {
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                totalBudget: action.payload,
                remainingBudget: action.payload - state.totalExpenses,
            };
        case 'ADD_EXPENSE':
            let updatedTotalExpenses = state.totalExpenses + action.payload.amount;
            return {
                ...state,
                totalExpenses: updatedTotalExpenses,
                remainingBudget: state.totalBudget - updatedTotalExpenses,
            };
        default:
            return state;
    }
};

// Expense Reducer
const initialExpenseState = [];

const expenseReducer = (state = initialExpenseState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    budget: budgetReducer,
    expenses: expenseReducer,
});

export default rootReducer;
