import React from 'react';
import './ManagementPage.css';

function ManagementPage() {
    return (
        <div className="management-main-content">
            <div className="top-block">
                <div className="top-block-upper">청각약자 키오스크 관리자 페이지</div>
                <div className="top-block-lower"></div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="status-box">운영현황</div> {/* 여기에 추가 */}
                    <div className="status-text">
                        <div>키오스크 수량 : 6대</div>
                        <div>정상 수량 : 6대</div>
                        <div>불량 수량 : 6대 <button type="submit" className="check-button">점검</button></div>
                    </div>
                    <div className="operation-buttons">
                        <button type="submit" className="operation-button">전 기기 화면 초기화</button>
                        <button type="submit" className="operation-button">전 기기 재시작</button>
                    </div>

                </div>
                <div className="grid-item">
                    <div className="status-box">키오스크 동작 관리</div> {/* 여기에 추가 */}
                    <button className="edit-button">새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
                <div className="grid-item">
                    <div className="status-box">광고 관리</div> {/* 여기에 추가 */}
                    <div className="status-text">
                        <div>현재 광고 개수 : 7개</div>
                        <div>공통 게시 광고 개수 : 5개</div>
                        <div>개별 게시 광고 개수 : 2개</div>
                        <div>미 게시 광고 개수 : 5개</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="status-box">음성정보 관리</div> {/* 여기에 추가 */}
                    <button className="edit-button">새창에서 편집</button> {/* 새 버튼 추가 */}
                </div>
            </div>
        </div>
    );
}


export default ManagementPage;
