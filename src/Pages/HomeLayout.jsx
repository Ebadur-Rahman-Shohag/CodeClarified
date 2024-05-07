import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Landing from "./Landing";

function HomeLayout() {
  return (
    <>
      <Navbar />
      {/* <Landing/> */}
      <Outlet />
    </>
  );
}

export default HomeLayout;
