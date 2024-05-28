import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { colorTokens } from "../../../color";
import StatBox from "./StatBox";

const StatBoxSummary = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const statBoxes = [
    {
      title: "12,361",
      subtitle: "Emails Sent",
      progress: 0.75,
      increase: "+14%",
      icon: (
        <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
      ),
    },
    {
      title: "431,225",
      subtitle: "Sales Obtained",
      progress: 0.5,
      increase: "+21%",
      icon: (
        <PointOfSaleIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "32,441",
      subtitle: "New Clients",
      progress: 0.3,
      increase: "+5%",
      icon: (
        <PersonAddIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "1,325,134",
      subtitle: "Traffic Received",
      progress: 0.8,
      increase: "+43%",
      icon: (
        <TrafficIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
  ];

  return (
    <Grid container spacing={2}>
      {statBoxes.map((item, index) => (
        <Grid xs={12} md={6} lg={3} key={index}>
          <Box
            width="100%"
            sx={{
              backgroundColor: colors.primary[400],
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={item.title}
              subtitle={item.subtitle}
              progress={item.progress}
              increase={item.increase}
              icon={item.icon}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatBoxSummary;
