import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../color";
import Header from "../components/resuables/home/Header";
import GeographyChart from "../components/resuables/charts/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
