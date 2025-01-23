import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaUser, FaBriefcase, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={styles.navbar} className='bg-gray-900'>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <Link to="/" style={styles.logoText}>
            JobTracker
          </Link>
        </div>

        {/* Navigation Links */}
        <div style={{ ...styles.navLinks, ...(menuOpen ? styles.navLinksOpen : {}) }}>
          <Link to="/dashboard" style={styles.navLink}>
            <FaHome style={styles.icon} />
            <span>Dashboard</span>
          </Link>
          <Link to="/job-search" style={styles.navLink}>
            <FaSearch style={styles.icon} />
            <span>Job Search</span>
          </Link>
          <Link to="/applications" style={styles.navLink}>
            <FaBriefcase style={styles.icon} />
            <span>Applications</span>
          </Link>
          <Link to="/profile" style={styles.navLink}>
            <FaUser style={styles.icon} />
            <span>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div style={styles.mobileMenuButton}>
          <button onClick={toggleMenu} style={styles.menuButton}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    // backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoText: {
    textDecoration: 'none',
    color: 'white',
  },
  navLinks: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    right: '20px',
    backgroundColor: '#333',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '10px',
  },
  navLinksOpen: {
    display: 'flex',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    padding: '10px 15px',
    borderBottom: '1px solid #444',
    transition: 'background-color 0.3s',
  },
  navLinkLast: {
    borderBottom: 'none',
  },
  icon: {
    marginRight: '8px',
  },
  mobileMenuButton: {
    display: 'flex',
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  },
  '@media (min-width: 768px)': {
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      position: 'static',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderRadius: '0',
      padding: '0',
    },
    navLink: {
      padding: '10px 20px',
      borderBottom: 'none',
    },
    mobileMenuButton: {
      display: 'none',
    },
  },
};

export default Navbar;
