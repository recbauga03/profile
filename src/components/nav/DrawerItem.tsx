import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { selectIsDrawerOpen } from "../../features/profile/profileSlice";
import { useAppSelector } from "../../app/hooks";
import "../../styles/drawerItem.css";

type Props = {
  text: string;
  path?: string;
  icon: JSX.Element;
  onClick: Function;
};

const DrawerItem: React.FC<Props> = ({ text, icon, path, onClick }) => {
  const isDraweropen = useAppSelector(selectIsDrawerOpen);

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        className="drawerItem"
        onClick={() => onClick(path)}
        sx={{
          minHeight: 48,
          justifyContent: isDraweropen ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          className="navIcon"
          sx={{
            minWidth: 0,
            mr: isDraweropen ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ opacity: isDraweropen ? 1 : 0 }}
          className="navLabel"
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
