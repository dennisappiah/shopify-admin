import { Box, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { colorTokens } from "../../../color";

const DownloadReport = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box>
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

export default DownloadReport;
