import { toast } from "react-toastify";

export const AlertMessage = (message) => {
  return toast.error(message);
};
