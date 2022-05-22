import React from 'react';

const handleWrite = () => {
  // ListPage의 setPosts에 무엇을 담아야할까?
  let post = { id: 6, title: '인풋값' };
};

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
