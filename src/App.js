import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Hero from './pages/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ContactUs from './pages/Contact-us';
import AboutUs from './pages/About-us';
import Dashboard from './pages/Dashboard';
import JobSearch from './pages/Job-search';
import AuthLayout from './layouts/AuthLayout';
import Applications from './pages/Applications';

import Layout from './layouts/Layout'; 
// import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Hero />} />
        <Route element={<Layout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/learn-more' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/job-search' element={<JobSearch />} />
          <Route path='/applications' element={<Applications />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
