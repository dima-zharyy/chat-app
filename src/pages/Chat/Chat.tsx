import { Box, Container } from "@mui/material";
import {
  ChatInputBar,
  ChatSidebar,
  ChatUserMenu,
  ChatWindow,
} from "components";
import { boxStyles, chatContainer } from "./styles";

export const Chat: React.FC = () => {
  return (
    <Container sx={chatContainer}>
      <ChatSidebar />
      <Box component="div" sx={boxStyles}>
        <ChatUserMenu />
        <ChatWindow />
        <ChatInputBar />
      </Box>
    </Container>
  );
};
