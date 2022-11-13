import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import List from "@mui/material/List";
import DrawerHeader from "./DrawerHeader";
import Drawer from "./Drawer";
import DrawerItem from "./DrawerItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { config } from "../../data/config";
import {
  selectIsDrawerOpen,
  setIsDrawerOpen,
  selectTheme,
  toggleTheme,
} from "../../features/profile/profileSlice";
import "../../styles/drawer.css";

const DrawerComponent: React.FC = () => {
  const theme = useTheme();
  const themeMode = useAppSelector(selectTheme);
  const isDraweropen = useAppSelector(selectIsDrawerOpen);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDrawerClose = () => {
    dispatch(setIsDrawerOpen(false));
  };

  const handleToggleTheme = (str:string) => {
    dispatch(toggleTheme());
  }

  const handleNavigate = (str:string) => {
    navigate(str);
  }

  return (
    <Drawer variant="permanent" open={isDraweropen} id="drawer">
      <DrawerHeader id="drawerHeader">
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <List>
        {config.links.map((link, index) => (
          <DrawerItem
            key={link.text}
            text={link.text}
            icon={<link.icon />}
            path={link.path}
            onClick={handleNavigate}
          />
        ))}
      </List>

      <List id="themeMode">
        <DrawerItem
          text={themeMode === 'light' ? 'Light Mode' : 'Dark Mode'}
          icon={themeMode === 'light' ? <Brightness4Icon />: <Brightness7Icon />}
          onClick={handleToggleTheme}
        />
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
