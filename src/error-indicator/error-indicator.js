import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

const ErrorIndicator = () => {
  return (
    <MDBContainer>
      <MDBAlert color="danger" >
      <h4>ERROR: 404</h4>
        Something has gone terribly wrong<br/>
        Сервер времено недоступен
      </MDBAlert>
    </MDBContainer>
  );
}

export default ErrorIndicator;
