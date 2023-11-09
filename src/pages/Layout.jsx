import React from 'react';
import Content from './Layout/Content';
import LayoutNavigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative h-[100dvh]">
      <LayoutNavigation />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
