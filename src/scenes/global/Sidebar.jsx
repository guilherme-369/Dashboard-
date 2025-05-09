import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ProflierUser from '../../assets/sapopf.jpeg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const SidebarComponent = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const handleSelect = (title) => setSelected(title);

  return (
    <Box style={{ height: '100vh', display: 'flex' }}>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={theme.palette.background.default}
        rootStyles={{ borderRight: 'none' }}
      >
        <Menu>
          {/* Botão de colapso */}
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" px={2}>
                <Typography variant="h6">PAINEL GSP</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Informações do usuário */}
          {!isCollapsed && (
            <Box textAlign="center" my={2}>
              <img 
                 alt="profile-user"
                 width="100px"
                 height="100px"
                 src={ProflierUser}
                 style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Typography variant="h6">Guilherme Passos</Typography>
              <Typography variant="body2">VIP</Typography>
            </Box>
          )}

          {/* Itens principais */}
          <MenuItem
            active={selected === "Dashboard"}
            onClick={() => handleSelect("Dashboard")}
            icon={<HomeOutlinedIcon />}
            component={<Link to="/" />}
          >
            Dashboard
          </MenuItem>

          <Typography variant="subtitle2" px={2} mt={2}>Data</Typography>

          <MenuItem
            active={selected === "Manage Team"}
            onClick={() => handleSelect("Manage Team")}
            icon={<PeopleOutlinedIcon />}
            component={<Link to="/team" />}
          >
            Manage Team
          </MenuItem>

          <MenuItem
            active={selected === "Contacts"}
            onClick={() => handleSelect("Contacts")}
            icon={<ContactsOutlinedIcon />}
            component={<Link to="/contacts" />}
          >
            Contacts Information
          </MenuItem>

          <MenuItem
            active={selected === "Invoices"}
            onClick={() => handleSelect("Invoices")}
            icon={<ReceiptOutlinedIcon />}
            component={<Link to="/invoices" />}
          >
            Invoice Balance
          </MenuItem>

          <Typography variant="subtitle2" px={2} mt={2}>Pages</Typography>

          <MenuItem
            active={selected === "Profile"}
            onClick={() => handleSelect("Profile")}
            icon={<PersonOutlinedIcon />}
            component={<Link to="/form" />}
          >
            Profile Form
          </MenuItem>

          <MenuItem
            active={selected === "Calendar"}
            onClick={() => handleSelect("Calendar")}
            icon={<CalendarTodayOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            Calendar
          </MenuItem>

          <MenuItem
            active={selected === "FAQ"}
            onClick={() => handleSelect("FAQ")}
            icon={<HelpOutlineOutlinedIcon />}
            component={<Link to="/faq" />}
          >
            FAQ Page
          </MenuItem>

          <Typography variant="subtitle2" px={2} mt={2}>Charts</Typography>

          <MenuItem
            active={selected === "Bar"}
            onClick={() => handleSelect("Bar")}
            icon={<BarChartOutlinedIcon />}
            component={<Link to="/bar" />}
          >
            Bar Chart
          </MenuItem>

          <MenuItem
            active={selected === "Pie"}
            onClick={() => handleSelect("Pie")}
            icon={<PieChartOutlineOutlinedIcon />}
            component={<Link to="/pie" />}
          >
            Pie Chart
          </MenuItem>

          <MenuItem
            active={selected === "Line"}
            onClick={() => handleSelect("Line")}
            icon={<TimelineOutlinedIcon />}
            component={<Link to="/line" />}
          >
            Line Chart
          </MenuItem>

          <MenuItem
            active={selected === "Geography"}
            onClick={() => handleSelect("Geography")}
            icon={<MapOutlinedIcon />}
            component={<Link to="/geography" />}
          >
            Geography Chart
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;
