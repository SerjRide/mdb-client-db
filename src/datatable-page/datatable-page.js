import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import FilltextService from '../services/filltext-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './datatable-page.css';

export default class DatatablePage extends Component {

  filltextService = new FilltextService();

  state = {
    list: null,
    loading: true,
    error: false,
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  componentDidMount() {
    this.loadLiteTable();
  };

  componentDidUpdate(prevProps) {
    const { table } = this.props;

    if (this.props.table !== prevProps.table) {
      if (table === 'light') {
        this.setState({loading: true})
        this.loadLiteTable();
      }else if (table === 'hard') {
        this.setState({loading: true})
        this.loadHardTable();
      }
    }
  };

  loadLiteTable() {
    this.filltextService
      .getLiteData()
      .then((list) => {
        this.setState({ list,
          loading: false
        });
      })
      .catch((err) => {this.onError(err)})
  };

  loadHardTable() {
    this.filltextService
      .getHardData()
      .then((list) => {
        this.setState({ list,
          loading: false
        });
      })
      .catch((err) => {this.onError(err)});
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

    const { list, loading, error } = this.state

    if (loading) {return <Spinner />}
    else if (error) {return <ErrorIndicator />}

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
      <MDBDataTable striped responsive
       small data={ renderList }/>
    );
  };
};
