

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';

import logo from './logo.png';
import './App.css';
import LoginPage from './LoginPage.js';
import ManagementPage from './ManagementPage.js';
import OperationStatusPage from './OperationStatusPage';
import KioskControlPage from './KioskControlPage';
import AdManagementPage from './AdManagementPage';
import VoiceInfoPage from './VoiceInfoPage';
import SettingsPage from './SettingsPage';
import UserManagementPage from './UserManagementPage';
import AdEditPage from './AdEditPage';
import AdInfo from './AdInfo';
import MainPage from './MainPage';
import { AdDataProvider } from './AdDataContext';
import { KioskDataProvider } from './KioskDataContext';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('user');
    setIsAuthenticated(!!loggedInUser);
  }, []);

  const login = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
  };

    return (
        <div className="app-container">
            <Router basename='/'>
              <AdDataProvider>
              <KioskDataProvider>
                <TopNavigationComponent isAuthenticated={isAuthenticated} logout={logout} />
                <LeftNav />
                <MainContent isAuthenticated={isAuthenticated} login={login} />
              </KioskDataProvider>
              </AdDataProvider>
            </Router>
        </div>
    );
}
function MainContent({ isAuthenticated, login }) {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<LoginPage onLogin={login} />} />
        <Route path="/main" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MainPage /></ProtectedRoute>} />
        {/* <Route path="/main" element={<MainPage />} /> */}
        <Route path="/management" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ManagementPage /></ProtectedRoute>} />
        <Route path="/management/operation-status" element={<OperationStatusPage />} />
        <Route path="/management/kiosk-control" element={<KioskControlPage />} />
        <Route path="/management/ad-management" element={<AdManagementPage />} />
        <Route path="/management/ad-management/ad-edit" element={<AdEditPage />} />
        <Route path="/management/ad-management/ad-edit/ad-info" element={<AdInfo />} />
        <Route path="/management/voice-info" element={<VoiceInfoPage />} />
        <Route path="/management/settings" element={<SettingsPage />} />
        <Route path="/management/user-management" element={<UserManagementPage />} />
      </Routes>
    </div>
  );
}
// function ProtectedRoute({ isAuthenticated, children }) {
//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }
function ProtectedRoute({ children }) {
  return children;
}

// 별도의 컴포넌트로 분리된 LeftNav
function LeftNav() {
  const location = useLocation(); // 훅 호출 위치 변경
  
  return (
    <div>
    {(location.pathname.startsWith('/management') || location.pathname.startsWith('/main'))  && (
    <nav className="left-nav">
      <img src={logo} alt="Logo" className="left-nav-logo" />
      {/* 조건부 콘텐츠 렌더링 */}
      
        <div className="management-nav-content">
          <div>
              <h2>키오스크 관리</h2>
              <div><Link to="/main">▪운영현황</Link></div>
              <div><Link to="/management/kiosk-control">▪키오스크 동작 관리</Link></div>
              <div><Link to="/management/kiosk-control">▪키오스크 기능 관리</Link></div>
              <div><Link to="/management/ad-management">▪광고 관리</Link></div>
              <div><Link to="/management/settings">▪맞춤형 기능 관리</Link></div>
              <h2>일반 관리</h2>
              <div><Link to="/management/user-management">▪사용자 관리</Link></div>
              <h2>관리자 시스템 정보</h2>
          </div>
        </div>
      
    </nav>
    )}
    </div>
  );
}

function TopNavigationComponent({ isAuthenticated, logout }) {
  const location = useLocation(); // 훅 호출 위치 변경
  const navigate = useNavigate(); // useNavigate 훅은 컴포넌트 내부에서 사용

  const logoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
    {(location.pathname.startsWith('/management') || location.pathname.startsWith('/main'))  && (
    <nav className="top-nav">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <div className="top-nav-title">
        <span className="top-nav-title-text">청각약자 키오스크 관리자 페이지</span>
        <span className="top-nav-login-text">Admin 계정으로 로그인 되었습니다
          <button className="account-management-btn">계정관리</button>
          {isAuthenticated && (
        <button className="logout-btn" onClick={logoutClick}>로그아웃</button>
      )}
        </span>
      </div>
  </nav>
   )}
   </div>
  );
}

export default App;
