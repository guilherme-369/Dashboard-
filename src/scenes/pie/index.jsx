import { Box } from "@mui/material";
import PieChart from "../../Components/PieChart";
import Header from "../../Components/Header";

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
