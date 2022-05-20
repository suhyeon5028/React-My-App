import React from 'react';
import Login from '../components/login/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/join')}>회원가입</button>
      <button onClick={() => navigate('/')}>홈</button>
      <Login />
    </div>
  );
};

export default LoginPage;
