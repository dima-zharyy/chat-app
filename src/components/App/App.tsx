import { Chat, Home, NotFound, PersonalChat, SignIn, SignUp } from "pages";
import { Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="chat" element={<Chat />}>
        <Route path=":userId" element={<PersonalChat />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
