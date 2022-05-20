import React from 'react';
import Join from '../components/join/Join';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goLogin = () => {
    // login 경로로 이동
    navigate('/login/:id');
  };

  const goHome = () => {
    // home 경로로 이동
    navigate('/');
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goLogin}>로그인</button>
      <button onClick={goHome}>홈</button>
      <Join />
    </div>
  );
};

export default JoinPage;
