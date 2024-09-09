import React from 'react';
import './App.css'
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { Home } from './pages/home/Home.tsx';
import { About } from './pages/about/About.tsx';
import { NotFoundPage } from './pages/error/NotFoundPage.tsx';

export const App:React.FC = () => {

  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
  );
};
