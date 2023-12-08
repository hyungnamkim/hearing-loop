// TopBlock.js

import React, { useState, useEffect } from 'react';
import './ManagementPage.css';
import './MainPage.css';

const TopBlock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const pad = (num) => num.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    };
    const handleResetClick = () => {
        alert("전 기기의 화면이 초기화되었습니다.");
    };
    const responseTestClick = () => {
        alert("전 기기가 응답중입니다");
    };


    return (
        <div className="top-block">
            <div className="top-block-upper">
                <span className='checker'>✓</span>
                {"키오스크 운영 현황 (" + formatTime(currentTime) + ")"}
                <span className="circle">0</span>
            </div>
            <div className="top-block-lower">
                    <span className="main-header-span">등록 키오스크  <span className="main-header-span-number">6</span> </span>  
                    <span className="main-header-span">정상 동작  <span className="main-header-span-number">6</span> </span>
                    <span className="main-header-span">수신불량  <span className="main-header-span-number">0</span> </span>
                    <span className="main-header-span">점검중  <span className="main-header-span-number">0</span> </span>
                    <button className="main-header-btn" onClick={handleResetClick}>전 기기 화면초기화</button>
                    <button className="main-header-btn" onClick={responseTestClick}>전 기기 응답 테스트</button>
                    <button className="main-header-btn">상세관리</button>

                </div>
        </div>
    );
};

export default TopBlock;
