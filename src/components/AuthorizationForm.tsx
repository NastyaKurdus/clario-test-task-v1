import { FC } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormProps,
  FormProvider,
} from "react-hook-form";
import { PasswordInput } from "./PasswordInput";
import { EmailInput } from "./EmailInput";

interface Inputs {
  email: string;
  password: string;
}

interface AuthorizationFormProps {
  onSubmit(): void;
}

const formConfig: UseFormProps<Inputs> = {
  mode: "onBlur",
  reValidateMode: "onBlur",
  defaultValues: { email: "", password: "" },
  criteriaMode: "all",
  shouldFocusError: false,
};

export const AuthorizationForm: FC<AuthorizationFormProps> = ({ onSubmit }) => {
  const methods = useForm<Inputs>(formConfig);

  const onSubmitSuccess: SubmitHandler<Inputs> = (data) => {
    console.log("data: ", data);
    onSubmit();
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="authorization-form"
        noValidate
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmitSuccess)}
      >
        <EmailInput />
        <PasswordInput />
        <button className="custom-submit" type="submit">
          Sign up
        </button>
      </form>
    </FormProvider>
  );
};
