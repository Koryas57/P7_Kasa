import React from 'react';
import './App.css'
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { Home } from './pages/home/Home.tsx';
import { About } from './pages/about/About.tsx';
import { NotFoundPage } from './pages/error/NotFoundPage.tsx';
import { CardPage } from './pages/cardPage/CardPage.tsx';

export const App:React.FC = () => {

  return (
  <Layout>
    <Routes>
      <Route path="P7_Kasa" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/error404" element={<NotFoundPage />} />
      <Route path="card/:id" element={< CardPage />} />
    </Routes>
  </Layout>
  );
};
