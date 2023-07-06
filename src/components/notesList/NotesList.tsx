import {
  HStack,
  List,
  ListItem,
  Button,
  Heading,
  Box,
  SkeletonText,
} from "@chakra-ui/react";
import useNotes, { Note } from "../../hooks/useNotes";
import { NoteQuery } from "../NotePage";
import { TriangleDownIcon } from "@chakra-ui/icons";

interface Props {
  onSelectNote: (note: Note) => void;
  selectedNote: Note | null;
  noteQuery: NoteQuery;
}

const NotesList = ({ selectedNote, onSelectNote, noteQuery }: Props) => {
  const { data, error, isLoading } = useNotes(noteQuery);

  if (error) return null;
  if (isLoading)
    return (
      <SkeletonText
        mt="4"
        mr="3"
        noOfLines={14}
        spacing="9"
        skeletonHeight="2.5"
      />
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} textAlign="left">
        Notes
      </Heading>
      <List>
        {data.map((note) => (
          <ListItem key={note.noteID} paddingY="5px">
            <HStack color="Highlight">
              <Box
                boxSize="30px"
                opacity={note.noteID === selectedNote?.noteID ? "0.9" : "0.3"}
              >
                <TriangleDownIcon />
              </Box>
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
