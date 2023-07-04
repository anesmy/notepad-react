import { NoteQuery } from "../components/NotePage";
import useData from "./useData";

export interface Note {
  noteID: number;
  title: string;
  content: string;
}

const useNotes = (noteQuery: NoteQuery) =>
  useData<Note>(
    "/",
    {
      // params: {
      //   search: noteQuery.searchText,
      // },
    }
    //[noteQuery]
  );

export default useNotes;
