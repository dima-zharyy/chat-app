import { Box } from "@mui/material";
import { ChatInputBar, ChatWindow } from "components";
import { useParams } from "react-router-dom";
import { boxStyles } from "./styles";

export const ChatRoom: React.FC = () => {
  const params = useParams();
  console.log(params);

  return (
    <Box component="div" sx={boxStyles}>
      <ChatWindow />
      <ChatInputBar />
    </Box>
  );
};
