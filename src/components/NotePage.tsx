import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./header/NavBar";
import NoteHeading from "./notesGrid/NoteHeading";
import NotesList from "./notesList/NotesList";
import { Note } from "../hooks/useNotes";
import NoteGrid from "./notesGrid/NoteGrid";

export interface NoteQuery {
  searchText: string;
  note: Note;
}

function NotePage() {
  const [noteQuery, setNoteQuery] = useState<NoteQuery>({} as NoteQuery);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Create your notes conveniently and beautifully"
        />
      </Helmet>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "215px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setNoteQuery({ ...noteQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding={3.5}>
            <NotesList
              selectedNote={noteQuery.note}
              onSelectNote={(note) => setNoteQuery({ ...noteQuery, note })}
              noteQuery={noteQuery}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <NoteHeading noteQuery={noteQuery} />
          </Box>
          <NoteGrid noteQuery={noteQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default NotePage;
