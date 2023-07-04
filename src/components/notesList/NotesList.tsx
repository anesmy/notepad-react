import {
  HStack,
  List,
  Image,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useNotes, { Note } from "../../hooks/useNotes";
import { NoteQuery } from "../NotePage";

interface Props {
  onSelectNote: (note: Note) => void;
  selectedNote: Note | null;
  noteQuery: NoteQuery;
}

const NotesList = ({ selectedNote, onSelectNote, noteQuery }: Props) => {
  const { data, error, isLoading } = useNotes(noteQuery);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} textAlign="left">
        Notes
      </Heading>
      <List>
        {data.map((note) => (
          <ListItem key={note.noteID} paddingY="5px">
            <HStack>
              <Image boxSize="30px" borderRadius={9} objectFit="cover" />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={
                  note.noteID === selectedNote?.noteID ? "bold" : "normal"
                }
                onClick={() => onSelectNote(note)}
                fontSize="lg"
                variant="link"
              >
                {note.title}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NotesList;
