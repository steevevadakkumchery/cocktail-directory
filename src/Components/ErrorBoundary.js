import React, { Component } from 'react';
import styled from 'styled-components';
import warningIcon from '../assets/round-error-symbol.png';

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBox>
          <img width="200px" height="200px" src={warningIcon} />
          <h1>Sorry Failed To Load Data</h1>
        </ErrorBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
