import { configureStore } from '@reduxjs/toolkit';
import budgetAndExpenseReducer from './BudgetAndExpenseSlice';

const store = configureStore({
    reducer: {
        budget: budgetAndExpenseReducer
    }
});

export default store;
