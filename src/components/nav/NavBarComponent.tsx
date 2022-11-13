import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectIsDrawerOpen,
  setIsDrawerOpen,
} from "../../features/profile/profileSlice";
import { config } from "../../data/config";
import AppBar from "./AppBar";
import { Link } from "react-router-dom";
import '../../styles/navBar.css';

const NavBarComponent: React.FC = () => {
  const isDraweropen = useAppSelector(selectIsDrawerOpen);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    dispatch(setIsDrawerOpen(true));
  };

  return (
    <AppBar position="fixed" open={isDraweropen}>
      <Toolbar id="toolbar">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isDraweropen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" id="navTitle">
          <Link to={'/'}>{config.title}</Link>          
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
