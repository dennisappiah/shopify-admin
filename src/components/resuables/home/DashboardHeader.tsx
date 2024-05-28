import { Box, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "./Header";
import { colorTokens } from "../../../color";

const DashboardHeader = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      m="10px 0"
    >
      <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      <Button
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
        Download Reports
      </Button>
    </Box>
  );
};

export default DashboardHeader;
