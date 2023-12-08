// src/MainPage.js
import './ManagementPage.css';
import './MainPage.css';
import TopBlock from './TopBlock';

function MainPage() {
   
    return (
        <div className="management-main-content">
            <TopBlock />
            <div className="grid-container">
                <div className="grid-item">
                    <div className="status-box">광고 현황</div> {/* 여기에 추가 */}
                    <div className="status-text">
                        <div>현재 광고 개수 : 7개</div>
                        <div>공통 게시 광고 개수 : 5개</div>
                        <div>개별 게시 광고 개수 : 2개</div>
                        <div>미 게시 광고 개수 : 5개</div>
                    </div>

                </div>
                <div className="grid-item">
                    <div className="status-box">맞춤형 기능 관리</div> {/* 여기에 추가 */}
                </div>

            </div>
        </div>
    );
}

export default MainPage;
