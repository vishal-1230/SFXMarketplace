import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
