// Team.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/MockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const renderAccessCell = (access, colors) => {
  const icon =
    access === "admin" ? (
      <AdminPanelSettingsOutlinedIcon title="Admin Access" />
    ) : access === "manager" ? (
      <SecurityOutlinedIcon title="Manager Access" />
    ) : (
      <LockOpenOutlinedIcon title="User Access" />
    );

  return (
    <Box
      minWidth="120px"
      m="0 auto"
      p="5px 10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={
        access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
      }
      borderRadius="4px"
    >
      {icon}
      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );
};

const getColumns = (colors) => [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "accessLevel",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => renderAccessCell(access, colors),
  },
];

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = getColumns(colors);

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height={{ xs: "60vh", sm: "65vh", md: "70vh" }}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[500],
            fontWeight: "bold",
          },
          "& .name-column--cell:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: colors.primary[600],
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
