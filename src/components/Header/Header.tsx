import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import "./Header.styles.css";
const Header = () => {
  return (
    <div
      className="headerContainer
     d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col sm={8}>
            <div className="inputSearch">
              <SearchInput />
            </div>
          </Col>
          <Col>
            <div className="inputSearch text-center">
              <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </Col>
          <Col className="text-center">
            <div className="btnAddNote">
              <Link className="btn btn-success" to="/adduser">
                Add note
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
