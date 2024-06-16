import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalBudget: 0,
    totalExpenses: 0,
    remainingBudget: 0,
    expenses: []
};

const budgetAndExpenseSlice = createSlice({
    name: 'budgetAndExpense',
    initialState,
    reducers: {
        setBudget: (state, action) => {
            state.totalBudget = action.payload;
            state.remainingBudget = state.totalBudget - state.totalExpenses;
        },
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
            state.totalExpenses += action.payload.amount;
            state.remainingBudget = state.totalBudget - state.totalExpenses;
        }
    }
});

export const { setBudget, addExpense } = budgetAndExpenseSlice.actions;
export default budgetAndExpenseSlice.reducer;
