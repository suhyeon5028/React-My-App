import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:id" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
