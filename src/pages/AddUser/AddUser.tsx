import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router";
const AddUser = () => {
  const [movie, setMovie] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  // const { dispatch } = React.useContext(movieContext);
  const history = useHistory();
  const onSubmitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Math.random(), name: movie, year }),
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
        <Form onSubmit={onSubmitFunction}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>movie name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do homework"
              value={movie}
              onChange={(event) => {
                setMovie(event.target.value);
              }}
            />
          </Form.Group>
          <div className="inputSearch text-center mb-3">
            <input
              type="number"
              name="filter"
              id="filter"
              onChange={(e) => setYear(e.target.value)}
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

export default AddUser;
