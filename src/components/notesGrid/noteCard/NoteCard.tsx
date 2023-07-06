import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Note } from "../../../hooks/useNotes";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Icon from "./Icon";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Card>
      <CardHeader padding="0">
        <Icon>
          <EditIcon mr="2%" />
          <DeleteIcon />
        </Icon>
        <Heading fontSize="1.3rem" textAlign="center">
          {note.title}
        </Heading>
      </CardHeader>
      <CardBody color="#9ca3b3" textAlign="center">
        <Text textAlign="left" overflow="hidden" maxBlockSize="24">
          {note.content}
        </Text>
        <ChevronDownIcon cursor="pointer" />
      </CardBody>
    </Card>
  );
};

export default NoteCard;
