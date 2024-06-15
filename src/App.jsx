import './App.css';
import Header from './components/Header';
import BudgetOverview from './components/BudgetOverview';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BudgetOverview />
      <ExpenseList />
      <AddExpenseForm />
    </div>
  );
}

export default App;
