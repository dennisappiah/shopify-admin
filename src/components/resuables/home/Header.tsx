import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../../color";

interface Props {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: Props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" color={colors.grey[100]} sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
