import React, { useState } from "react";
import { InputField } from "@/components/common/SearchBar/searchInputBar";
import TextView from "@/components/common/TextComponent/text-component";
import Wrapper from "@/components/common/Wrapper/wrapper";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Wrapper classes="top-20 justify-center flex align-center">
      <TextView classes="uppercase black mx-auto">
        Закони на Република Северна Македонија
      </TextView>
      <InputField
        classes={`border-black w-[80%] flex justify-center {Platform.OS === 'ios' ? 200 : 100} mx-auto my-3 items-center px-3 py-3 border-2`}
        value={inputValue}
        onTextChange={(text) => {
          setInputValue(text);
          console.log("Input Value:", text);
        }}
        text="Пребарувај"
      />
    </Wrapper>
  );
}
