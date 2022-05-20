import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(목적 : 재사용)
//styled-components => js파일과 css파일이 합쳐져서 관리하기 편함

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

// styled에 없는것은 import -> 상속 -> 디자인
const StyledHeaderLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv backgroundColor="blue">
        <ul>
          <li>
            <StyledHeaderLink to="/">홈</StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink to="/login/10">로그인</StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink to="/join">회원가입</StyledHeaderLink>
          </li>
        </ul>
      </StyledHeaderDiv>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              홈
            </Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
