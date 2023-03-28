import './App.css';
import { LoginForm } from './components/login-form/LoginForm';
import { RegisterForm } from './components/Register-form/RegisterForm';
import { ResourceDisplayer } from './components/resource-displayer/ResourceDisplayer';
import { useState } from 'react';

function App() {
  const [displayResources, setDisplayResources] = useState(false);

  return (
    <div className="App">
      <LoginForm setDisplayResources={setDisplayResources}/>
      <RegisterForm/>
      {displayResources && <ResourceDisplayer setDisplayResources={setDisplayResources}/>}
    </div>
  );
}

export default App;
