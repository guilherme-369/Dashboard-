import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={isMobile ? "60vh" : "75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
