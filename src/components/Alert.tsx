// type rafce for reactArrowFunctionExportComponent once we have EX7+React/Reudux...extension installed in VScode

import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close" // after copying the everything inside <button> </button>, need to rename class to className
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>{" "}
    </div>
  );
};

export default Alert;
