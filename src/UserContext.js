import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [FullName, setName] = useState(
    "Please Provide Name And Amount In the Form"
  );
  const [Amount, setAmount] = useState("0");

  return (
    <UserContext.Provider
      value={{
        FullName,
        Amount,
        setName,
        setAmount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
