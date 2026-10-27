import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toast';
import Login from './pages/login';
import Signup from './pages/signup';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { ProtectedRoutes } from './routes/protected-routes';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}
export default App;
