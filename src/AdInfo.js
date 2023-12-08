// Adinfo.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 임포트
import './ManagementPage.css';
import './AdManagementPage.css';
import './AdEditPage.css';



function AdEditPage() {
  // 페이지의 콘텐츠를 여기에 구현합니다.
  const location = useLocation();
  // location.state에서 연번 데이터를 추출
  const { sequenceNumber } = location.state || {}; // state가 없는 경우를 대비한 기본값 설정
  return (
    <div className="management-main-content">
            <div className="top-block">
                <div className="top-block-upper">{`청각약자 키오스크 관리자 페이지 > 메인페이지 > 광고 관리 > 광고 파일 편집 > 연번${sequenceNumber}`}</div>
                <div className="top-block-lower">
                    <div className="status-box">파일 정보</div> {/* 여기에 추가 */}
                    <div className="status-text">
                        <div>총 용량: 250GB</div>
                        <div>파일 개수: 10개</div>
                        <div>광고 형태: 영상</div>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="status-box">광고 파일 편집</div> {/* 여기에 추가 */}
                    <button className="edit-button">새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
                <div className="grid-item">
                    <div className="status-box">새 광고 파일 업로드</div> {/* 여기에 추가 */}
                    <button className="edit-button">새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
            </div>
            
        </div>
  );
}

export default AdEditPage;
