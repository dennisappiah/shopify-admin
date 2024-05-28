import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../../color";
import GeographyChart from "../charts/GeographyChart";

const GeographyTraffic = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box sx={{ backgroundColor: colors.primary[400] }} padding="30px">
      <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
        Geography Based Traffic
      </Typography>
      <Box height="200px">
        <GeographyChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default GeographyTraffic;
