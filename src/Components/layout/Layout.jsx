import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout