import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../../color";

const StyledBox = ({ children, ...props }: any) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box
      width="100%"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
