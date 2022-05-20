import React from 'react';
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
        <li>메뉴 1</li>
        <li>메뉴 2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
