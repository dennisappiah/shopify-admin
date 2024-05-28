import { Box } from "@mui/material";

import PieChart from "../components/resuables/charts/PieChart";
import Header from "../components/resuables/home/Header";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
