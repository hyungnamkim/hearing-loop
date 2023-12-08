// AdManagementPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import './ManagementPage.css';
import './AdManagementPage.css';
import './AdEditPage.css';
import { AdDataContext } from './AdDataContext';


function AdList({ title, data }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleRowClick = (row) => {
    // navigate 함수에 state 객체를 전달하여 페이지 이동
    navigate('/management/ad-management/ad-edit/ad-info', { state: { sequenceNumber: row.연번 } });
  };
    return (
      <div className="grid-item">
        <div className="status-box">{title}</div>
        <div className="sheet-box">
          <table>
            <thead>
              <tr>
                <th>연번</th>
                <th>송출 키오스크</th>
                <th>광고 명칭</th>
                <th>광고 형태</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} onClick={() => handleRowClick(row)}> {/* 수정된 클릭 이벤트 */}
                  <td>{row.연번}</td>
                  <td>{row.송출키오스크}</td>
                  <td>{row.광고명칭}</td>
                  <td>{row.광고형태}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


function AdEditPage() {
  // 페이지의 콘텐츠를 여기에 구현합니다.
  const { tableData } = useContext(AdDataContext);
  const publishedData = tableData.filter(row => row.송출중 === true);
  const unpublishedData = tableData.filter(row => row.송출중 === false);

  return (
    <div className="management-main-content">
            <div className="top-block">
                <div className="top-block-upper">{"청각약자 키오스크 관리자 페이지 > 메인페이지 > 광고 관리 > 광고 파일 편집"}</div>
                <div className="top-block-lower">
                </div>
            </div>
            <div className="grid-container">
                <AdList title="게시 중 광고 목록" data={publishedData} />
                <AdList title="미 게시 광고 목록" data={unpublishedData} />
            </div>
            
        </div>
  );
}

export default AdEditPage;
