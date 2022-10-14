import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export const ChatUserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsOpen((state) => !state);
  };

  const list = () => (
    <Box
      sx={{ width: "250px" }}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "cyan",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{ margin: 0, ...(isOpen && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Box>
  );
};
