import { useState } from 'react';
import { useAuth } from '../util/auth';
export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  function handleChangeUser(e) {
    setUser(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    auth.login(user, password);
    setUser('');
    setPassword('');
  }

  return (
    <div>
      <p>
        <label>Username</label>
        <input type="text" onChange={handleChangeUser} value={user} required />
      </p>
      <p>
        <label>Password</label>
        <input
          type="password"
          onChange={handleChangePassword}
          value={password}
          required
        />
      </p>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
