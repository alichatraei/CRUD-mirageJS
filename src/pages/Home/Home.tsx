import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../components/Header/Header";
import TableContainer from "../../components/TableContainer/TableContainer";
const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Header />
      <TableContainer />
    </div>
  );
};

export default Home;
