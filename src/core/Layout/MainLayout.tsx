import { FunctionComponent } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
