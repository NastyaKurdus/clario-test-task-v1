import { FC } from "react";
import cx from "classnames";
import useValidated, {
  ValidationStatus,
  ValidationTypes,
} from "../hooks/useValidated";
import { InfoBlock } from "./InfoBlock";

export interface Requirement {
  types: ValidationTypes;
  message: string;
  unpin?: boolean;
}

interface RequirementsProps {
  list: Requirement[];
  fieldName: string;
}

export const Requirements: FC<RequirementsProps> = ({ list, fieldName }) => {
  const { getTypesStatus } = useValidated(fieldName);

  return (
    <InfoBlock>
      <div className="requirements">
        {list.map(({ types, message, unpin }, index) => {
          const validationStatus = getTypesStatus(...types);
          return (
            (!unpin || validationStatus === ValidationStatus.error) && (
              <span
                key={index} // this array does not change, so you can use index as a key.
                className={cx("requirement", validationStatus)}
              >
                {message}
              </span>
            )
          );
        })}
      </div>
    </InfoBlock>
  );
};
