import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";
import './nav.css';

export default class Nav extends Component {

  render() {

    const { onChangedLight, onChangedHard } = this.props

    return (

      <BrowserRouter>
        <MDBNav>
        <h1>MDB Client DB</h1>
          <MDBNavLink
            onClick={ onChangedLight } to="#!">
            Light Table
          </MDBNavLink>
          <MDBNavLink
            onClick={ onChangedHard }
            to="#!">
            Hard Table
          </MDBNavLink>
        </MDBNav>
    </BrowserRouter>

    );
  };
};
