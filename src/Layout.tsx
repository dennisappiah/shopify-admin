import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./components/global/SideBar";
import TopBar from "./components/global/TopBar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <SideBar />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <TopBar />
        <Box component="main" sx={{ flexGrow: 1, p: 2, overflow: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
