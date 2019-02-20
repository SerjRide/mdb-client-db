import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import FilltextService from '../services/filltext-service';
import Spinner from '../spinner';


export default class DatatablePage extends Component {

  filltextService = new FilltextService();

  state = {
    list: null
  };

  componentDidMount() {
    this.filltextService
      .getLiteData()
      .then((list) => {
        this.setState({list});
      })
      .catch((err) => {
        console.error('Could not fetch', err);
      })
  };

  renderTab(arr) {
    return arr.map(({id, firstName, lastName, email, phone, city}) => {
      return ({

        rows: [{
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            city: city
          }]

      });
    });
  };

  render() {

    const { list } = this.state
    if (!list) {return <Spinner />}

    const renderList = {

      columns: [
        {label: 'ID',field: 'id',sort: 'asc',width: 150},
        {label: 'First Name',field: 'firstName',sort: 'asc',width: 270},
        {label: 'Last Name',field: 'lastName',sort: 'asc',width: 200},
        {label: 'Email',field: 'email',sort: 'asc',width: 100},
        {label: 'Phone',field: 'phone',sort: 'asc',width: 150},
        {label: 'City',field: 'city',sort: 'asc',width: 100}
      ],
      rows: []

    };

    for (let i = 1; i < list.length; i++) {
      renderList.rows.push(this.renderTab(list)[i].rows[0]);
    };

    return (
      <MDBDataTable striped hover data={renderList}/>
    );
  };
};
