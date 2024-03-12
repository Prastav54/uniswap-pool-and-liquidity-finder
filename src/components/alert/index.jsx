import toast from "react-hot-toast";

export const AlertMessage = (message, type = "error") => {
  toast[type](message, {
    duration: 4000,
    position: "top-right",
  });
};
