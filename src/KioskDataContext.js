// KioskDataContext.js
import React, { createContext, useState } from 'react';

export const KioskDataContext = createContext();

export const KioskDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([
    { id: 1, number: 'K-01', location: '한국관광공사 서울센터 1층', reset: '클릭', restart: '클릭', monitor: '클릭' },
    { id: 2, number: 'K-02', location: '성동구청 1층', reset: '클릭', restart: '클릭', monitor: '클릭' },
    { id: 3, number: 'K-03', location: '청음복지관 1층', reset: '클릭', restart: '클릭', monitor: '클릭' },
    { id: 4, number: 'K-04', location: '성동구청 버스정류장(04574)', reset: '클릭', restart: '클릭', monitor: '클릭' },
    { id: 5, number: 'K-05', location: '서울시청 시민청 태평홀', reset: '클릭', restart: '클릭', monitor: '클릭' },
    { id: 6, number: 'K-06', location: '서울시립대학교 학생회관 1층', reset: '클릭', restart: '클릭', monitor: '클릭' }
  ]);

  return (
    <KioskDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </KioskDataContext.Provider>
  );
};
