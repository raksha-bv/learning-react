import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image src={logo}></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
