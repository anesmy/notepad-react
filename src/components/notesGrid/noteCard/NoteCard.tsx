import { ChevronDownIcon } from "@chakra-ui/icons";
import { Note } from "../../../hooks/useNotes";
import { Card, CardBody, Heading, Text, VStack } from "@chakra-ui/react";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading
          fontSize="1.3rem"
          textAlign="center"
          marginBottom="4%"
          marginTop="2%"
        >
          {note.title}
        </Heading>
        <VStack color="#9ca3b3">
          <Text textAlign="left" overflow="hidden" maxBlockSize="24">
            {note.content}
          </Text>
          <ChevronDownIcon cursor="pointer" />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
