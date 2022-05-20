import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(목적 : 재사용)
//styled-components => js파일과 css파일이 합쳐져서 관리하기 편함

const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>오시는길 : 서울 강남구...</li>
        <li>전화번호 : 020202</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
