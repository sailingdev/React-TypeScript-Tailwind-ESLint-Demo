import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '../../layouts';
import { MainPage } from '../../pages';

const MainRoute = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default MainRoute;
