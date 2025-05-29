import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height={isMobile ? "60vh" : "75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
