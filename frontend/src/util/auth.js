import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  function login(user, password) {
    setUser(user);
    setPassword(password);
  }
  function logout() {
    setUser(null);
    setPassword(null);
  }
  return (
    <AuthContext.Provider value={{ user, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
