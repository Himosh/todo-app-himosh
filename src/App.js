import './App.css';
import { DataProvider } from './dataContext';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Dashboard />
      </DataProvider>
    </div>
  );
}

export default App;
