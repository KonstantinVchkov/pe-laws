import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import React from "react";
import { StyleSheet, Image, Platform, Text } from "react-native";

const laws = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <Text style={styles.titleContainer}>
        Hello This is the page where all laws are
      </Text>
    </ParallaxScrollView>
  );
};

export default laws;

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    color: "white",
  },
});
