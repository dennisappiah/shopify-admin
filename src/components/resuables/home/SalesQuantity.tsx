import { Box, Typography, useTheme } from "@mui/material";
import BarChart from "../charts/BarChart";
import { colorTokens } from "../../../color";

const SalesQuantity = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box sx={{ backgroundColor: colors.primary[400] }}>
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
      >
        Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default SalesQuantity;
