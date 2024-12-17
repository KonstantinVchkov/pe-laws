import React from "react";
import { Text, View } from "react-native";
import { TextProps } from "./text-component.prop";

const TextView: React.FC<TextProps> = ({ children, classes, handleClick }) => {
  return (
    <Text className={classes} onPress={handleClick}>
      {children}
    </Text>
  );
};

export default TextView;
