import { Box } from "@mui/material";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart";

const bar = () => {
  return (
    <Box mb="20px">
      <Header title={"Bar Chart"} subTitle={"Simple Bar Chart"} />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default bar;
