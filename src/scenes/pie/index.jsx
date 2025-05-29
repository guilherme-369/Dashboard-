import { Box, useMediaQuery } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height={isMobile ? "60vh" : "75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
