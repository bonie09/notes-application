import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../Actions/noteAction";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteCreate = useSelector((state) => state.noteCreate);

  const { error, note } = noteCreate;
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      return;
    }
    dispatch(createNote(title, content, category));
    console.log(note);
    resetHandler();
    navigate("/mynotes");
  };

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };
  return (
    <MainScreen title="Create a New Note">
      <Card className="border-light">
        <Card.Header>
          <h1>New Note</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter a Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="info">
              Submit a New Note
            </Button>
            <Button className="mx-4" variant="danger" onClick={resetHandler}>
              Reset
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default CreateNote;
