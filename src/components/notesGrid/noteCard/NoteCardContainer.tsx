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
      borderRadius={10}
      overflow="hidden"
      transform={isRotated ? "rotate(5deg)" : "rotate(0deg)"}
    >
      {children}
    </Box>
  );
};

export default NoteCardContainer;
