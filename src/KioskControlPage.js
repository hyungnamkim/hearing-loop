// UserManagementPage.js
import React, { useContext } from 'react';
// 필요한 경우 스타일시트를 import 합니다.
import './KioskControlPage.css';
import TopBlock from './TopBlock';
import './ManagementPage.css';
import { KioskDataContext } from './KioskDataContext';


function DataPage() {

  const {tableData} = useContext(KioskDataContext);
  // 화면 초기화 이벤트 핸들러
  const handleResetClick = (number) => {
    alert(`${number}의 화면이 초기화되었습니다.`);
  };

  // 키오스크 재실행 이벤트 핸들러
  const handleRestartClick = (number) => {
    alert(`${number}의 키오스크가 재실행되었습니다.`);
  };

  // 화면 모니터링 이벤트 핸들러
  const handleMonitorClick = (number) => {
    alert(`${number}의 화면 모니터링이 시작되었습니다.`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>연번</th>
            <th>키오스크 순번</th>
            <th>설치 위치</th>
            <th>화면 초기화</th>
            <th>키오스크 재실행</th>
            <th>화면 모니터링</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(kiosk => (
            <tr key={kiosk.id}>
              <td>{kiosk.id}</td>
              <td>{kiosk.number}</td>
              <td>{kiosk.location}</td>
              <td><button onClick={() => handleResetClick(kiosk.number)}>클릭</button></td>
              <td><button onClick={() => handleRestartClick(kiosk.number)}>클릭</button></td>
              <td><button onClick={() => handleMonitorClick(kiosk.number)}>클릭</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KioskControlPage() {
  // 페이지의 콘텐츠를 여기에 구현합니다.
  return (
    <div>
      <div className="management-main-content">
        <TopBlock />
        <div className="top-block">
          <div className="top-block-upper">키오스크별 관리</div>
          <div className="top-block-lower">
            <DataPage />
          </div>
        </div>
      </div>
      
    </div>
    
    
  );
}

export default KioskControlPage;
