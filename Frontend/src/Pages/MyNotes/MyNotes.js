import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Badge, Accordion } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, listNotes } from "../../Actions/noteAction";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import ReactMarkdown from "react-markdown";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);

  const userLogin = useSelector((state) => state.userLogin);

  const noteCreate = useSelector((state) => state.noteCreate);

  const noteUpdate = useSelector((state) => state.noteUpdate);

  const { success: successUpdate } = noteUpdate;

  const { success: successCreate } = noteCreate;

  const navigate = useNavigate();

  const { userInfo } = userLogin;

  const { error, notes } = noteList;

  const noteDelete = useSelector((state) => state.noteDelete);

  const { success: successDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
    navigate("/mynotes");
  };

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <MainScreen title={`Welcome back ${userInfo.name}!!`}>
      <Link to="/createnote">
        <Button
          style={{ marginLeft: 10, marginBottom: 15 }}
          size="lg"
          variant="info"
        >
          Create new Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {notes
        ?.reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
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
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
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
