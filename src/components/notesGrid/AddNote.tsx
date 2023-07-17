import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";

const StyledField = styled(Field)`
  border: 1px solid #ccc;
  padding: 9px 130px 7px 8px;
  width: 80%;
  margin: 15px;
  border-radius: 6px;
  background-color: rgb(36 35 35);
  border-color: rgb(181, 213, 255);
`;

interface FormValues {
  title: string;
  content: string;
}

const AddNote = () => {
  const [error, setError] = useState<Error | null>(null);

  const initialValues: FormValues = {
    title: "",
    content: "",
  };

  const handleSubmit = (values: FormValues) => {
    const note = { title: values.title, content: values.content };

    axios
      .post("http://localhost:8080/note", note)
      .then((response) => {
        console.log("Note created successfully:", response.data);
      })
      .catch((error) => setError(error));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <IconButton
          type="submit"
          aria-label="Add note"
          icon={<AddIcon />}
          variant="outline"
          fontSize="14px"
          margin="0 18% 0 4%"
          borderRadius="20"
          width="80%"
          sx={{
            "&:hover": {
              borderColor: "Highlight",
            },
          }}
        />

        <StyledField type="text" name="title" placeholder="Title" />
        <StyledField
          as="textarea"
          name="content"
          placeholder="Content"
          rows={5}
        />
      </Form>
    </Formik>
  );
};

export default AddNote;
