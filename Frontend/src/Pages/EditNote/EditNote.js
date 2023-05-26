import React, { useEffect, useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateNote } from "../../Actions/noteAction";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const noteUpdate = useSelector((state) => state.noteUpdate);
  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`);
      console.log(data);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };
    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    if (!title || !content || !category) {
      return;
    }
    dispatch(updateNote(id, title, content, category));
    resetHandler();
    navigate("/mynotes");
  };
  return (
    <MainScreen title="Edit a Note">
      <Card className="border-light">
        <Card.Header>
          <h1>Edit your Note</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter a Content"
                value={content || ""}
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
                value={category || ""}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="info">
              Update a Note
            </Button>
            <Button className="mx-4" variant="danger" onClick={resetHandler}>
              Reset
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>Updated on - {date.substring(0, 10)}</Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default EditNote;
