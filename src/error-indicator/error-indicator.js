import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

const ErrorIndicator = () => {
  return (
    <MDBContainer>
      <MDBAlert color="danger" >
      <h4>ERROR: 404</h4>
        Something has gone terribly wrong<br/>
        Страница не найдена или сервер времено недоступен
      </MDBAlert>
    </MDBContainer>
  );
}

export default ErrorIndicator;
