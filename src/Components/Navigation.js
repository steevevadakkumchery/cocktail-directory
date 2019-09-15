import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo-white.png';
import { withRouter } from 'react-router-dom';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.currentPage === '/' ? `flex-start` : `center`)};
  background-color: black;

  ${props =>
    props.currentPage === '/' &&
    `
      font-weight: 900;
      height: 6rem;
      justify-content: space-between;
      position: absolute;
      left: 40px;
      top: 40px;
      float: right;
    `};
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-direction: ${props => (props.currentPage === '/' ? 'column' : 'row')};
  font-size: ${props => (props.currentPage === '/' ? '2em' : '1em')};
  width: ${props => (props.currentPage === '/' ? '200px' : '10rem')};
  height: inherit;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.currentPage === '/' ? 'grey' : '#aaa')};
  font-weight: 100;
  font-size: 0.9em;

  &:visited {
    color: #aaa;
  }

  &:hover {
    color: #fff;
  }

  &:active {
    color: grey;
  }
`;

const Logo = styled.img`
  width: 20rem;
`;

function Navigation({ location }) {
  return (
    <NavigationContainer currentPage={location.pathname}>
      {location.pathname !== '/' && <Logo src={logo} />}
      <Links currentPage={location.pathname}>
        <StyledLink to="/">{'Home'.toUpperCase()}</StyledLink>
        <StyledLink to="/cocktails">{'Cocktails'.toUpperCase()}</StyledLink>
      </Links>
    </NavigationContainer>
  );
}

export default withRouter(Navigation);
