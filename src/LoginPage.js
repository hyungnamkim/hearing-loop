import React, { useState } from 'react';
import logo from './logo.png'; // 'src' 폴더 안의 'logo.png'를 import
import { useNavigate } from 'react-router-dom'; // useNavigate를 import합니다.
import './LoginPage.css'; // CSS 파일 임포트

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 오류 메시지 상태 추가

   // 사용자 이름과 비밀번호가 모두 입력되었는지 확인
    const isFormFilled = username.length > 0 && password.length > 0;

//   const handleLogin = (event) => {
//     event.preventDefault(); // 폼 제출 방지
//     if (username === 'designxplay' && password === 'admin') {
//         sessionStorage.setItem('user', JSON.stringify({ username }));
//         navigate('/management'); // 조건이 만족할 때 '/management' 페이지로 이동
//         setError('');
//     } else {
//         // alert('잘못된 아이디 또는 비밀번호입니다.'); // 조건 불만족 시 경고 메시지
//         setError('ID 또는 비밀번호가 올바르지 않습니다.'); // 오류 메시지 설정
//     }
// };
const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'designxplay' && password === 'admin') {
      const user = { username }; // 로그인한 사용자 정보
      sessionStorage.setItem('user', JSON.stringify(user));
      onLogin(user); // App 컴포넌트로 로그인 상태 업데이트
      navigate('/main'); // 페이지 이동
      setError('');
    } else {
      setError('ID 또는 비밀번호가 올바르지 않습니다.');
    }
  };

return (
  <div className="login-container">
      <div className="login-form">
          <form onSubmit={handleLogin}>
              
              <div className="login-title">
                <img src={logo} alt="logo" className="logo" />
                <span className="title-text">
                    <span>청각약자 키오스크</span><br/>
                    <span>관리자 페이지</span>
                </span>
              </div>
              <div className="form-row">
                  {/* <label htmlFor="username" className="form-label">로그인 이름</label> */}
                  <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="아이디" // 여기에 placeholder 추가
                  />
              </div>
              <div className="form-row">
                  {/* <label htmlFor="password" className="form-label">로그인 암호</label> */}
                  <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호" // 여기에 placeholder 추가
                  />
              </div>
              <button
                type="submit"
                className={`login-button ${!isFormFilled ? 'disabled' : ''}`}
                disabled={!isFormFilled} // 비활성화 상태 관리
                >
                로그인
            </button>
            {error && <div className="login-error">{error}</div>}
            <div className='contact-info'>
                이용문의 : 070-7779-8707 (디자인엑스플레이)
            </div>
          </form>
      </div>
  </div>
);
}

export default LoginPage;