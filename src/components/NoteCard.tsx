import { Note } from "../hooks/useNotes";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}></HStack>
        <Heading fontSize="1.3rem" textAlign="left">
          {note.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
