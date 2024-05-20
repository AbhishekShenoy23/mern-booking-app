import React, { useEffect } from "react";

type ToastProps = {
  type: string;
  message: string;
  onClose: () => void;
};

const Toast = ({ type, message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <div className="fixed top-4 right-4 z-100">
      <span>
        {" "}
        {type} {message}
      </span>
    </div>
  );
};

export default Toast;
