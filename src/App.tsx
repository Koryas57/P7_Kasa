import './App.css'
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home  from './pages/Home.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx';

const App = () => {

  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
  );
};

export default App;
