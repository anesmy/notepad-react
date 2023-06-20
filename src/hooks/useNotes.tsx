//import useData from "./useData";

export interface Note {
  id: number;
  title: string;
  content: string;
}

// const useGames = (gameQuery: GameQuery) => 
//   useData<Game>("/games", {
//     params: { 
//       genres: gameQuery.genre?.id, 
//       parent_platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     }}, 
//     [gameQuery]);

//export default useNotes;