import { useState } from "react";
import { DEFAULT_INFORMATION, InformationType } from "../constants/constant";
import { statusContext } from "./StatusContext";
import Toast from "../components/Toast";

// Define the type for the context value
type StatusContextType = {
  information: InformationType;
  setInformation: React.Dispatch<React.SetStateAction<InformationType>>;
};

type Props = {
  children: React.ReactNode;
};

export const StatusContextProvider = ({ children }: Props) => {
  const [information, setInformation] =
    useState<InformationType>(DEFAULT_INFORMATION);

  const value: StatusContextType = { information, setInformation };
  console.log(information, "FROM the Context Provider");
  return (
    <statusContext.Provider value={value}>
      {information && (
        <Toast
          type={information.type}
          message={information.message}
          onClose={() => setInformation(DEFAULT_INFORMATION)}
        />
      )}
      {children}
    </statusContext.Provider>
  );
};
