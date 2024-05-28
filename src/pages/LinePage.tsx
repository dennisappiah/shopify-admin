import { Box } from "@mui/material";
import LineChart from "../components/resuables/charts/LineChart";
import Header from "../components/resuables/home/Header";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
