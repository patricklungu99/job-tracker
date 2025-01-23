import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';


const Layout = ({ children }) => {
  const location = useLocation();
  
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <div>
      {!isAuthRoute && <Navbar />}
      
      <Outlet />
      
      {!isAuthRoute && <Footer />}
    </div>
  );
};

export default Layout;
