import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청(fetch, axios(외부 라이브러리 다운))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);

  // 빈배열은 최초에 한번만 실행됨
  useEffect(() => {
    // 다운로드 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    // 다운로드가 완료되기 전에는 빈데이터가 들어감
    setBoards([...data]);
    setUser({ id: 1, username: 'cos' });
  }, []);
  // 부모가 자식에게 보내는 데이터를 props라고 함

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
