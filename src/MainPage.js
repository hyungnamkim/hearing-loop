// src/MainPage.js
import './ManagementPage.css';
import './MainPage.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트

import TopBlock from './TopBlock';
import { AdDataContext } from './AdDataContext';


function AdList({ title, data }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleRowClick = (row) => {
    // navigate 함수에 state 객체를 전달하여 페이지 이동
    navigate('/management/ad-management/ad-edit/ad-info', { state: { sequenceNumber: row.연번 } });
  };
    return (
        <div className="sheet-box">
          <table>
            <thead>
              <tr>
                <th>순서</th>
                <th>광고 명칭</th>
                <th>광고 명칭</th>
                <th>노출시간(초)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} onClick={() => handleRowClick(row)}> {/* 수정된 클릭 이벤트 */}
                  <td>{row.연번}</td>
                  <td>{row.광고명칭}</td>
                  <td>{row.광고형태}</td>
                  <td>{row.노출시간}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
function MainPage() {
    const { tableData } = useContext(AdDataContext);
    const publishedData = tableData.filter(row => row.송출중 === true);
    
    
    return (
        <div className="management-main-content">
            <TopBlock />
            <div className="grid-container">
                <div className="grid-item">
                    <div className="status-box">
                        <span className='checker'>✓</span>광고 현황
                        <button className='insert-btn'>+</button>
                    </div> {/* 여기에 추가 */}
                    <AdList title="게시 중 광고 목록" data={publishedData} />

                </div>
                <div className="grid-item">
                    <div className="status-box">
                    <span className='checker'>✓</span>
                        맞춤형 기능 관리
                    <button className='insert-btn'>+</button>
                    </div> {/* 여기에 추가 */}
                </div>

            </div>
        </div>
    );
}

export default MainPage;
