import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const pie = () => {
  return (
    <Box mb="20px">
      <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default pie;
