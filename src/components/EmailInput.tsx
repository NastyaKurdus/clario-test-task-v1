import { FC } from "react";
import { Input } from "./Input";
import { InfoBlock } from "./InfoBlock";
import { emailPattern } from "../utils/validations";
import useValidated, { ValidationStatus } from "../hooks/useValidated";

const emailFieldName = "email";
const emailOptions = {
  required: true,
  pattern: emailPattern,
};

export const EmailInput: FC = () => {
  const { validationStatus, getTypesStatus } = useValidated(emailFieldName);

  return (
    <div className="email-wrapper">
      <Input
        placeholder="Enter your email"
        fieldName={emailFieldName}
        options={emailOptions}
      />
      {validationStatus === ValidationStatus.error && (
        <InfoBlock>
          <p className="error-msg">
            {getTypesStatus("required") === ValidationStatus.error
              ? "Field is required"
              : "This field doesn't look right. Please try again."}
          </p>
        </InfoBlock>
      )}
    </div>
  );
};
