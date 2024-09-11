import { createContext, useContext, useEffect, useState } from "react";
import { FetchData } from "../utils/rapidApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [Loading, SetLoading] = useState(true);
  const [Data, SetData] = useState([]);
  const [value, SetValue] = useState("New");

  useEffect(() => {
    FetchAllData(value);
  }, [value]);

  const FetchAllData = (query) => {
    SetLoading(true);
    FetchData(`search/?q=${query}`).then(({ contents }) => {
      SetData(contents);
      SetLoading(false);
    });
  };

  return (
    <>
      <AuthContext.Provider
        value={{ Loading, Data, SetLoading, value, SetValue }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
