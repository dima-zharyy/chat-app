import { Box } from "@mui/material";
import { ChatList, ChatUserMenu } from "components";
import { Outlet } from "react-router-dom";
import { chatBox } from "./styles";

export const Chat: React.FC = () => {
  return (
    <Box sx={chatBox}>
      <ChatUserMenu />
      <ChatList />
      <Outlet />
    </Box>
  );
};
