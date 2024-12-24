import { TextInput } from "react-native";

export type InputFieldProps = {
  classes?: string;
  text: string;
  onTextChange: () => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  classes,
  text,
  onTextChange,
}) => {
  return (
    <TextInput onChange={onTextChange} placeholder={text} className={classes} />
  );
};
