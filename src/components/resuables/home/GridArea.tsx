import Grid from "@mui/material/Unstable_Grid2";
import RevenueGenerated from "./RevenenueGenerated";
import LatestTransactions from "./LatestTransactions";
import Campaign from "./Campaign";
import GeographyTraffic from "./GeographyTraffic";
import SalesQuantity from "./SalesQuantity";

const GridArea = () => {
  return (
    <Grid container spacing={2} my={3}>
      <Grid xs={12} sm={12} md={8}>
        <RevenueGenerated />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <LatestTransactions />
      </Grid>
      <Grid xs={12} sm={12} md={6}>
        <Campaign />
      </Grid>
      <Grid xs={12} sm={12} md={6}>
        <SalesQuantity />
      </Grid>
      <Grid xs={12} sm={12}>
        <GeographyTraffic />
      </Grid>
    </Grid>
  );
};

export default GridArea;
