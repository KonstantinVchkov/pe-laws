import React from "react";
import { View } from "react-native";
import { WrapperProps } from "./wrapper.prop";

const Wrapper: React.FC<WrapperProps> = ({ children, classes }) => {
  return <View className={classes}>{children}</View>;
};

export default Wrapper;
