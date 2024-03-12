import toast from "react-hot-toast";

export const AlertMessage = (message) => {
  toast.error(message, {
    duration: 4000,
    position: "top-right",
  });
};
