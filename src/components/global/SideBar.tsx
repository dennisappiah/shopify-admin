import { Menu, MenuItem, MenuItemStyles, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../color";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/emo.jpeg";

const SideBar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [, setBroken] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  const sideBarTheme = {
    sidebar: {
      backgroundColor: `${colors.primary[400]}`,
    },
    menu: {
      icon: {
        backgroundColor: "transparent",
      },
      hover: {
        backgroundColor: `${colors.primary[400]}`,
        color: "#868dfb",
      },
      active: {
        backgroundColor: `${colors.primary[400]}`,
        color: "#6870fa",
      },
    },
  };

  const menuItemStyles: MenuItemStyles = {
    button: {
      "&:hover": {
        backgroundColor: sideBarTheme.menu.hover.backgroundColor,
        color: sideBarTheme.menu.hover.color,
      },
      padding: "5px 35px 5px 20px",
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      "&:active": {
        backgroundColor: sideBarTheme.menu.hover.backgroundColor,
        color: sideBarTheme.menu.active.color,
      },
    }),
  };

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
      }}
    >
      {/* SideBar */}
      <Sidebar
        collapsed={collapsed}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        transitionDuration={1000}
        backgroundColor={colors.primary[400]}
      >
        <Menu menuItemStyles={menuItemStyles}>
          {/* logo and icons */}
          {!collapsed && (
            <Box display="flex" justifyContent="space-between" ml="15px">
              <Typography
                variant="h4"
                color={colors.grey[100]}
                marginTop="10px"
              >
                SHOPIFY
              </Typography>
              {/* close icon */}
              <IconButton onClick={() => setCollapsed(!collapsed)}>
                {<CloseOutlinedIcon />}
              </IconButton>
            </Box>
          )}

          {collapsed && (
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          )}

          {/* Profile */}
          {!collapsed && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={ProfilePic}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  marginTop: "15px",
                }}
              />
              <div style={{ marginTop: "5px" }}>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                  textAlign="center"
                >
                  KOFI
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  textAlign="center"
                >
                  Store Admin
                </Typography>
              </div>
            </Box>
          )}
          {/* Dashboard */}
          <MenuItem
            icon={<HomeOutlinedIcon />}
            component={<Link to="/" />}
            style={{ marginTop: "10px" }}
          >
            Dashboard
          </MenuItem>
          {/* Data */}
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "10px 0 5px 20px" }}
          >
            Data
          </Typography>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            component={<Link to="/team" />}
          >
            Manage Team
          </MenuItem>
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            component={<Link to="/contacts" />}
          >
            Contact Information
          </MenuItem>
          <MenuItem
            icon={<ReceiptOutlinedIcon />}
            component={<Link to="/invoices" />}
          >
            Invoices Balance
          </MenuItem>
          {/* Pages */}
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "10px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <MenuItem
            icon={<PersonOutlinedIcon />}
            component={<Link to="/form" />}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            icon={<CalendarTodayOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            Calendar
          </MenuItem>
          <MenuItem icon={<HelpOutlinedIcon />} component={<Link to="/faq" />}>
            FAQ Page
          </MenuItem>
          {/* Charts */}
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "10px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <MenuItem
            icon={<BarChartOutlinedIcon />}
            component={<Link to="/bar" />}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            icon={<PieChartOutlinedIcon />}
            component={<Link to="/pie" />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            icon={<ShowChartOutlinedIcon />}
            component={<Link to="/line" />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            icon={<MapOutlinedIcon />}
            component={<Link to="/geography" />}
          >
            Geography Chart
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
