import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchInput from "./SearchInput";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  let navigate: NavigateFunction = useNavigate();

  return (
    <HStack padding="10px" spacing="2%">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => navigate("/")}
        css={{
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
