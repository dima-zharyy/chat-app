import {
  Avatar,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styles } from "./styles";

const users = [
  "Public room",
  "Burt Scramton",
  "Chik Van Deil",
  "Sum Dinos",
  "Everlast McTonk",
  "Public room",
  "Burt Scramton",
  "Chik Van Deil",
  "Sum Dinos",
  "Everlast McTonk",
];

export const ChatList: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        ...styles,
        backgroundColor: "white",
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      <Box component="div" sx={{ p: 1 }}>
        <TextField fullWidth label="search" color="secondary" />
      </Box>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          height: "max-content",
        }}
      >
        {users.map((user: string) => {
          return (
            <>
              <ListItem
                divider
                alignItems="flex-start"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemAvatar sx={{ margin: "0" }}>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={user} />
              </ListItem>
            </>
          );
        })}
      </List>
    </Box>
  );
};
