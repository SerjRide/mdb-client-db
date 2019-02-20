import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Nav from './nav';
import DatatablePage from './datatable-page';
import "./app.css";

class App extends Component {

  state = {
    table: 'light'
  };

  onChangedHard = () => {
    this.setState({
      table: 'hard'
    });
  };

  onChangedLight = () => {
    this.setState({
      table: 'light'
    });
  };

  render() {
    return (
      <MDBContainer>
      <Nav
        onChangedHard={this.onChangedHard}
        onChangedLight={this.onChangedLight}/>
        <MDBRow center style={{ height: "100%" }}>
          <MDBCol sm="12" className="text-nowrap">
            <DatatablePage
              table={ this.state.table }/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
