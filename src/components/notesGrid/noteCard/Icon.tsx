import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Icon = ({ children }: Props) => {
  return (
    <Box textAlign="right" cursor="pointer" opacity="0.3" margin="2% 5% 4% 0%">
      {children}
    </Box>
  );
};

export default Icon;
