import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
