import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../../color";
import ProgressCircle from "./ProgressCircle";

const Campaign = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box sx={{ backgroundColor: colors.primary[400] }} p="30px">
      <Typography variant="h5" fontWeight="600">
        Campaign
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <ProgressCircle progress="0.75" size="125" />
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          $48,352 revenue generated
        </Typography>
        <Typography>Includes extra misc expenditures and costs</Typography>
      </Box>
    </Box>
  );
};

export default Campaign;
