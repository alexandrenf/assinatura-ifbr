import React, { useState } from 'react';
import SignatureEditor from './components/SignatureEditor';
import './styles.css';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // Define your password here
  const correctPassword = 'assinaturasIFBR'; // Replace 'yourpassword' with your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert('Incorrect password');
      setPasswordInput('');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="App">
        <h2>Digite a senha</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="senhas"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      <SignatureEditor />
    </div>
  );
}

export default App;
