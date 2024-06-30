import { FC } from "react";
import cx from "classnames";
import { RegisterOptions, useFormContext } from "react-hook-form";
import useValidated from "../hooks/useValidated";

interface InputProps {
  placeholder: string;
  type?: string;
  fieldName: string;
  options: RegisterOptions;
}

export const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  fieldName,
  options,
}) => {
  const { register } = useFormContext();
  const { validationStatus } = useValidated(fieldName);

  return (
    <input
      placeholder={placeholder}
      type={type}
      {...register(fieldName, options)}
      className={cx("custom-input", validationStatus)}
    />
  );
};
