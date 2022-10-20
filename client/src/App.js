import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import './App.css';
import Dashboard from './Dashboard';
import SignupLogin from './SignupLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<SignupLogin />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/admin-panel' element={<Admin />} />
    </Routes>
      {/* <Dashboard /> */}
    </BrowserRouter>
  );
}

export default App;
