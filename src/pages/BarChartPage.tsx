import { Box } from "@mui/material";
import Header from "../components/resuables/home/Header";
import BarChart from "../components/resuables/charts/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
