import { SimpleGrid, Text } from "@chakra-ui/react";
import { NoteQuery } from "../NotePage";
import useNotes from "../../hooks/useNotes";
import NoteCard from "./noteCard/NoteCard";
import NoteCardContainer from "./noteCard/NoteCardContainer";
import NoteCardSkeleton from "./noteCard/NoteCardSkeleton";

interface Props {
  noteQuery: NoteQuery;
}

const NoteGrid = ({ noteQuery }: Props) => {
  const { data, error, isLoading } = useNotes(noteQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="50px 40px 10px 30px"
      spacing={12}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <NoteCardContainer key={skeleton}>
            <NoteCardSkeleton />{" "}
          </NoteCardContainer>
        ))}
      {data.map((note) => (
        <NoteCardContainer key={note.noteID} id={note.noteID}>
          <NoteCard note={note} />
        </NoteCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default NoteGrid;
