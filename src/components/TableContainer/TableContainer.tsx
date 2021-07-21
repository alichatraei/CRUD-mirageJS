import React from "react";
import { Table } from "react-bootstrap";
import TableItem from "../TableItem/TableItem";

const TableContainer = () => {
  return (
    <div className="m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
        </tbody>
      </Table>
    </div>
  );
};

export default TableContainer;
