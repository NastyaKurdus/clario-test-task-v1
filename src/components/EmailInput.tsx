import { FC } from "react";
import { Input } from "./Input";
import { emailPattern } from "../utils/validations";
import { Requirements } from "./Requirements";

const emailFieldName = "email";
const emailOptions = {
  required: true,
  pattern: emailPattern,
};
const emailRequirements = [
  { types: ["required"], message: "Field is required.", unpin: true },
  {
    types: ["pattern"],
    message: "This field doesn't look right. Please try again.",
    unpin: true,
  },
];

export const EmailInput: FC = () => (
  <div className="email-wrapper">
    <Input
      placeholder="Enter your email"
      fieldName={emailFieldName}
      options={emailOptions}
    />
    <Requirements fieldName={emailFieldName} list={emailRequirements} />
  </div>
);
