import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Header from './header';
import DatatablePage from './datatable-page';
import "./index.css";

class App extends Component {
  render() {
    return (
      <MDBContainer>
      <Header />
        <MDBRow center style={{ height: "100%" }}>
          <MDBCol sm="12" className="text-center">
            <DatatablePage />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
