import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableItem = () => {
  const [movies, setMovies] = useState<any>([]);
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.movies);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleDelete = (id: string) => {
    fetch(`/api/movies/:${id}`, { method: "DELETE" }).catch((error) =>
      console.log(error)
    );
    const newMovieList = movies.filter((item: any) => item.id !== id);
    setMovies(newMovieList);
  };
  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((item: any) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>
                <Link to={`/edit/${item.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <Button
                  className="btn btn-danger mx-3"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={3} className="text-center">
            Nothing to show :/
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
