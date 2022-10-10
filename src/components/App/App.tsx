import { SharedLayout } from "components";
import { Chat, NotFound, Room, SignIn, SignUp } from "pages";
import { Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={<Chat />}>
          <Route path=":roomId" element={<Room />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
