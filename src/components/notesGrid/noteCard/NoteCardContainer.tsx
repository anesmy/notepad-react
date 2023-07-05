import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: number;
}

const NoteCardContainer = ({ children, id }: Props) => {
  const isRotated = id ? id % 2 == 1 : false;

  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      transform={isRotated ? "rotate(5deg)" : "rotate(-2deg)"}
      width="80%"
      borderColor="Highlight"
      borderWidth="1px"
      backgroundColor="rgb(32, 32, 32)"
    >
      {children}
    </Box>
  );
};

export default NoteCardContainer;
