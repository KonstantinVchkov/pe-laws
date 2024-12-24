import { InputField } from "@/components/common/SearchBar/searchInputBar";
import TextView from "@/components/common/TextComponent/text-component";
import Wrapper from "@/components/common/Wrapper/wrapper";
// import searchInputBar from "@/components/common/SearchBar/searchInputBar"
import { TextInput } from "react-native";
export default function HomeScreen() {
  return (
    <Wrapper classes="top-20 justify-center flex align-center">
      <TextView classes="uppercase black">
        {" "}
        Закони на Република Северна Македонија{" "}
      </TextView>
      <InputField
        classes="border-black w-[80%] flex justify-center mx-auto my-3 items-center px-3 border-2"
        text={"Пребарувај"}
        onTextChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {/* <TextInput
        className="border-black w-[80%] flex justify-center mx-auto my-3 items-center px-3 border-2"
        placeholder="Пребарувај"
      /> */}
    </Wrapper>
  );
}
