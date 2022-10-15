import {
  Avatar,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
    <Box component="div" sx={{ backgroundColor: "white" }}>
      <Box component="div" sx={{ p: 1 }}>
        <TextField fullWidth label="search" color="secondary" />
      </Box>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          overflowY: "auto",
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
