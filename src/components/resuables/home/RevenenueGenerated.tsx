import { Box, Typography, IconButton, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { colorTokens } from "../../../color";
import LineChart from "../charts/LineChart";

const RevenueGenerated = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box bgcolor={colors.primary[400]}>
      <Box
        mt="25px"
        p="0 30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Revenue Generated
          </Typography>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.greenAccent[500]}
          >
            $58,373,698
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="250px" m="-20px 0 0 0">
        <LineChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default RevenueGenerated;
