import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{
          m: "0 0 5px 0",
          fontSize: {
            xs: "1.8rem", // mobile
            sm: "2.2rem", // tablet (small)
            md: "2.5rem", // tablet (big)
            lg: "3rem", // desktop
            xl: "3.5rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.3rem",
            lg: "1.5rem",
            xl: "1.8rem",
          },
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
