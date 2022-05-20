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

// styled에 없는것은 import -> 상속 -> 디자인
const StyledHeaderLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
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
  );
};

export default Header;
