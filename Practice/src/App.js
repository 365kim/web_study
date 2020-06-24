import React, { Component } from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBView, MDBMask} from "mdbreact";

import 'react-vertical-timeline-component/style.min.css';
import Table from "./utils/Table";
import Cards from "./utils/Cards"
import FullPageNavbar from "./utils/Navbar";
import Timeline from "./utils/Timeline";

import "./index.css";

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
