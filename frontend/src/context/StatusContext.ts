import { createContext, useContext } from "react";
import { InformationType } from "../constants/constant";

type StatusContextType = {
  information: InformationType;
  setInformation: React.Dispatch<React.SetStateAction<InformationType>>;
};

export const statusContext = createContext<StatusContextType | null>(null);

export const useStatusContext = () => {
  const context = useContext(statusContext);
  return context;
};
