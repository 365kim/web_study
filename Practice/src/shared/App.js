import React, { Component } from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBView, MDBMask} from "mdbreact";

import 'react-vertical-timeline-component/style.min.css';
import Table from "../components/Table";
import Cards from "../components/Cards"
import FullPageNavbar from "../components/Navbar";
import Timeline from "../components/Timeline";

import "../index.css";

class App extends Component {
  render() {
    return (
        <MDBContainer className='m-0 p-0' style={{ height: "100vh" }} fluid>
            <FullPageNavbar />
            <Cards />
            <Table />
            <Timeline />
        </MDBContainer>
    );
  }
}

export default App;
