import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("houseRentToken");

    if (!token) {
      setLoading(false);
      return;
    }

    getCurrentUser()
      .then((data) => setUser(data.user))
      .catch(() => localStorage.removeItem("houseRentToken"))
      .finally(() => setLoading(false));
  }, []);

  const login = (data) => {
    localStorage.setItem("houseRentToken", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("houseRentToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
