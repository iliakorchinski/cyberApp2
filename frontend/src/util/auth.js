import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState('');

  function login(user, password) {
    setUser(user);
    setPassword(password);
  }
  function logout() {
    setUser(null);
    setPassword(null);
  }
  function loginMessage(message) {
    setMessage(message);
  }
  return (
    <AuthContext.Provider
      value={{ user, password, message, loginMessage, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
