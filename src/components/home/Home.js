import React from 'react';
import styled from 'styled-components';

let StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

// 스타일 상속(StyledDeleteButton의 설정을 가져옴)
let StyledAddButton = styled(StyledDeleteButton)`
  // color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

// Function방식
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, user } = props;

  return (
    <div>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
