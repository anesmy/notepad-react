import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: number;
}

const NoteCardContainer = ({ children, id }: Props) => {
  const isRotated = id ? id % 3 == 1 : false;

  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      transform={isRotated ? "rotate(5deg)" : "rotate(-2deg)"}
      width="80%"
      borderColor="#d8edfd"
      borderWidth="1px"
      backgroundColor="rgb(32, 32, 32)"
      boxShadow="dark-lg"
    >
      {children}
    </Box>
  );
};

export default NoteCardContainer;
