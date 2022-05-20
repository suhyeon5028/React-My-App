import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(목적 : 재사용)
//styled-components => js파일과 css파일이 합쳐져서 관리하기 편함

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor="blue">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login/10">로그인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
