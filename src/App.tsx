import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toast';
import Login from './pages/login';
import Signup from './pages/signup';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </Router>
  );
}
export default App;
