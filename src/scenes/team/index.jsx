// Team.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../Data/MockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header";

// 🔹 Função para renderizar célula de acesso
const renderAccessCell = (access, colors) => {
  const icon =
    access === "admin" ? (
      <AdminPanelSettingsOutlinedIcon titleAccess="Admin Access" />
    ) : access === "manager" ? (
      <SecurityOutlinedIcon titleAccess="Manager Access" />
    ) : (
      <LockOpenOutlinedIcon titleAccess="User Access" />
    );

  return (
    <Box
      width="60%"
      m="0 auto"
      mt="5%"
      p="5px"
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

// 🔹 Função que retorna as colunas do DataGrid
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

// 🔹 Componente principal
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = getColumns(colors);

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="65vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[500],
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
