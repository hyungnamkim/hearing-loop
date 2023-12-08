// AdDataContext.js
import React, { createContext, useState } from 'react';

export const AdDataContext = createContext();

export const AdDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([
    { 연번: 1, 송출키오스크: "공통", 광고명칭: "서울_01", 광고형태: "영상", 노출시간: 30, 일당노출횟수: 100, 시작일: "231204", 종료일: "231231", 비고: "클릭", 송출중: true },
    { 연번: 2, 송출키오스크: "공통", 광고명칭: "노동부_51", 광고형태: "영상/음성", 노출시간: 20, 일당노출횟수: 100, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: true },
    { 연번: 3, 송출키오스크: "K-06", 광고명칭: "행안부_1001", 광고형태: "이미지", 노출시간: 10, 일당노출횟수: 100, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: true },
    { 연번: 4, 송출키오스크: "공통", 광고명칭: "한강축제지원단_01", 광고형태: "이미지/음성", 노출시간: 10, 일당노출횟수: 100, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: true },
    { 연번: 5, 송출키오스크: "공통", 광고명칭: "경찰청_002", 광고형태: "영상", 노출시간: 20, 일당노출횟수: 200, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: true },
    { 연번: 6, 송출키오스크: "공통", 광고명칭: "총리실_1", 광고형태: "음성", 노출시간: 20, 일당노출횟수: 200, 시작일: "231201", 종료일: "231231", 비고: "클릭",송출중: false },
    { 연번: 7, 송출키오스크: "K-01, K-05", 광고명칭: "전라남도_99", 광고형태: "영상", 노출시간: 20, 일당노출횟수: 200, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: false },
    { 연번: 8, 송출키오스크: "공통", 광고명칭: "Default 영상", 광고형태: "이미지", 노출시간: 20, 일당노출횟수: 200, 시작일: "231204", 종료일: "231231", 비고: "클릭",송출중: false },
    // ... 이렇게 모든 데이터를 추가 ...
  ]);

  return (
    <AdDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </AdDataContext.Provider>
  );
};
