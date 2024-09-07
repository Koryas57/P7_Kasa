import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;