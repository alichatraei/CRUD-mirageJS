import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const [newMovieName, setNewMovieName] = React.useState<string | undefined>(
    ""
  );
  const [newYear, setNewYear] = React.useState<string | undefined>("");

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`/api/movies/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setNewMovieName(res.movie.name);
          setNewYear(res.movie.year);
        });
    };
    getData();
  }, [id]);
  const history = useHistory();
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`/api/movies/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ id, name: newMovieName, year: newYear }),
    });
    history.push("/");
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card
        style={{ width: "18rem", height: "18rem" }}
        className="text-center d-flex justify-content-center align-items-center
     border"
      >
        <Form onSubmit={(e) => handleOnSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do homework"
              value={newMovieName}
              onChange={(e) => setNewMovieName(e.target.value)}
            />
          </Form.Group>
          <div className="inputSearch text-center mb-3">
            <input
              type="number"
              name="filter"
              id="filter"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
            />
          </div>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default EditUser;
