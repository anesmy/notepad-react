import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { NoteQuery } from "../NotePage";

interface Props {
  noteQuery: NoteQuery;
}

const GameHeading = ({ noteQuery }: Props) => {
  const heading = `
  ${noteQuery.note?.title || "My"} Note
  `;

  return (
    <>
      <Helmet>
        <title> {heading} · Notepad</title>
      </Helmet>
      <Heading as="h1" marginY={5} fontSize="5xl" textAlign="left">
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
