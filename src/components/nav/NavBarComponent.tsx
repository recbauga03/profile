import AppBar from "./AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { config } from "../../data/config";
import { Link } from "react-router-dom";
import {
  selectIsDrawerOpen,
  setIsDrawerOpen,
} from "../../features/profile/profileSlice";
import "../../styles/navBar.css";

const NavBarComponent: React.FC = () => {
  const isDraweropen = useAppSelector(selectIsDrawerOpen);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    dispatch(setIsDrawerOpen(true));
  };

  const typeWriterInit = (typewriter: TypewriterClass) => {
    config.title.forEach((title) => {
      let deleteChar = title.text.length;

      typewriter = typewriter
        .typeString(title.text)
        .pauseFor(1000)
        .deleteChars(deleteChar);
    });
    typewriter.start();
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
          <Link to={"/"}>
            <Typewriter
              onInit={typeWriterInit}
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 1,
              }}
            />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
