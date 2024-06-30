import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

export type ValidationTypes = string[];

export enum ValidationStatus {
  error = "error-valid",
  success = "success-valid",
};

function useValidated(fieldName: string) {
  const { getFieldState, formState } = useFormContext();
  const { isSubmitted } = formState;
  const { isTouched, isDirty, error } = getFieldState(fieldName, formState);
  // `isTouched` to show the error only after blur event
  // `isSubmitted` to show the error even if an user didn't focus on the input
  // `isDirty` to color in green only after changes of the input and its validation
  const errorValidationStatus = (isTouched || isSubmitted) && ValidationStatus.error;
  const successValidationStatus = isDirty && ValidationStatus.success;
  const validationStatus = error?.types
    ? errorValidationStatus
    : successValidationStatus;
  const alwaysSuccessFn = useCallback(
    () => successValidationStatus,
    [successValidationStatus]
  );
  const dependingOnTypesFn = useCallback(
    (...types: ValidationTypes) =>
      types.some((type) => error!.types![type])
        ? errorValidationStatus
        : successValidationStatus,
    [error, errorValidationStatus, successValidationStatus]
  );
  const getTypesStatus = error?.types ? dependingOnTypesFn : alwaysSuccessFn;
  return { validationStatus, getTypesStatus };
}
export default useValidated;
