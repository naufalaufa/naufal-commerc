import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
function RootLayout() {
  return (
    <div>
      <NavBar />
      <h1>CRUD WITH AXIOS AND REDUX TOOLKIT</h1>
      <Outlet />
    </div>
  );
}

export default RootLayout;
