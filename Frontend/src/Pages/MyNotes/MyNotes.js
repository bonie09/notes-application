import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Accordion } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back Bonie Sachdev!!">
      <Link to="/createnote">
        <Button
          style={{ marginLeft: 10, marginBottom: 15 }}
          size="lg"
          variant="info"
        >
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion flush key={note._id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button href={`/note/${note._id}`} variant="info">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <Badge className="rounded-pill bg-success">
                  category - {note.category}
                </Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  Created on - some date
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
