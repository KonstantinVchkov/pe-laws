import React from "react";
import { ScrollView } from "react-native";
import { ScrollProps } from "./scrollContainer.props";

const ScrollContainer: React.FC<ScrollProps> = ({ children, classes }) => {
  return <ScrollView className={classes}>{children}</ScrollView>;
};

export default ScrollContainer;
