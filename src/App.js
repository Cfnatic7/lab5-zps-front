import logo from './logo.svg';
import './App.css';
import { LoginForm } from './components/login-form/LoginForm';
import { RegisterForm } from './components/Register-form/RegisterForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
}

export default App;
