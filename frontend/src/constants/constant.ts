export interface UserForm {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

enum type {
  Success = "SUCCESS",
  Error = "ERROR",
  Default = "",
}

export const DEFAULT_INFORMATION: InformationType = {
  type: type.Default,
  message: "",
  onClose: () => {},
};

export type InformationType = {
  type: type;
  message: string;
  onClose: () => void;
};
