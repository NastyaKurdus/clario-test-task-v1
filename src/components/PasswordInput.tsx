import { FC, useCallback, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "./Input";
import {
  maxLength,
  minLength,
  strHasNumber,
  strHasUpperCase,
  strNoSpace,
} from "../utils/validations";
import { Requirements } from "./Requirements";
import "../style/icons.scss";

const passwordFieldName = "password";
const passwordOptions = {
  required: true,
  validate: {
    minLength,
    maxLength,
    upperCase: strHasUpperCase,
    noSpace: strNoSpace,
    number: strHasNumber,
  },
};
const passwordRequirements = [
  { types: ["required"], message: "Field is required.", unpin: true },
  {
    types: ["minLength", "maxLength", "noSpace"],
    message: "8 characters or more (no spaces)",
  },
  { types: ["upperCase"], message: "At least one uppercase letter" },
  { types: ["number"], message: "At least one digit" },
];
const handleSkipBlur = (event: React.SyntheticEvent) => event.preventDefault();

export const PasswordInput: FC = () => {
  const { trigger } = useFormContext();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = useCallback(
    () => setPasswordShown((shown) => !shown),
    []
  );

  const options = useMemo(
    () => ({ ...passwordOptions, onChange: () => trigger(passwordFieldName) }),
    [trigger]
  );

  return (
    <div className="password-wrapper">
      <div className="password-input-wrapper">
        <Input
          placeholder="Create your password"
          type={passwordShown ? "text" : "password"}
          fieldName={passwordFieldName}
          options={options}
        />
        <i
          className={
            passwordShown ? "icon-hide-password" : "icon-show-password"
          }
          title={passwordShown ? "Hide" : "Show"}
          onClick={togglePasswordVisiblity}
          onMouseDown={handleSkipBlur}
        />
      </div>
      <Requirements fieldName={passwordFieldName} list={passwordRequirements} />
    </div>
  );
};
