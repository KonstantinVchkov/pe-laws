import { TextInput } from "react-native";
import { InputFieldProps } from "./searchInputBar.props";

export const InputField: React.FC<InputFieldProps> = ({
  classes,
  text,
  onTextChange,
  value,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onTextChange}
      placeholder={text}
      className={classes}
    />
  );
};
