// AdManagementPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import 추가
import './ManagementPage.css';
import './AdManagementPage.css';
import { AdDataContext } from './AdDataContext';

function YourComponent() {
  // 데이터를 상태로 저장 (실제 구현에서는 useState, useEffect 등을 사용할 수 있음)
  const {tableData} = useContext(AdDataContext);

  return (
    <div className="sheet-box">
      <div className="status-box">현재 송출 목록</div>
      <table>
        <thead>
          <tr>
            <th>연번</th>
            <th>송출 키오스크</th>
            <th>광고 명칭</th>
            <th>광고 형태</th>
            <th>노출시간(초)</th>
            <th>일당노출횟수</th>
            <th>시작일</th>
            <th>종료일</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.연번}</td>
              <td>{row.송출키오스크}</td>
              <td>{row.광고명칭}</td>
              <td>{row.광고형태}</td>
              <td>{row.노출시간}</td>
              <td>{row.일당노출횟수}</td>
              <td>{row.시작일}</td>
              <td>{row.종료일}</td>
              <td>{row.비고}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdManagementPage() {
  // 페이지의 콘텐츠를 여기에 구현합니다.
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleEditClick = () => {
    navigate('/management/ad-management/ad-edit'); // navigate 함수를 사용해 경로 이동
  };
  return (
    <div className="management-main-content">
            <div className="top-block">
                <div className="top-block-upper">청각약자 키오스크 관리자 페이지</div>
                <div className="top-block-lower">
                  <div className="status-box">현재 송출 목록</div> {/* 여기에 추가 */}
                  <YourComponent /> {/* 현재 송출 목록 표시 */}
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="status-box">광고현황</div> {/* 여기에 추가 */}
                    <div className="status-text">
                        <div>현재 광고 개수 : 7개</div>
                        <div>공통 게시 광고 개수 : 5개</div>
                        <div>개별 게시 광고 개수 : 2개</div>
                        <div>미 게시 광고 개수 : 5개</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="status-box">파일 현황</div> {/* 여기에 추가 */}
                      <div className="status-text">
                        <div>총 용량: 250GB</div>
                        <div>사용 용량: 50GB</div>
                        <div>여유 용량: 200GB</div>
                      </div>
                </div>
                <div className="grid-item">
                    <div className="status-box">광고 파일 편집</div> {/* 여기에 추가 */}
                    <button className="edit-button" onClick={handleEditClick}>새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
                <div className="grid-item">
                    <div className="status-box">새 광고 파일 업로드</div> {/* 여기에 추가 */}
                    <button className="edit-button">새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
            </div>
            
        </div>
  );
}

export default AdManagementPage;
