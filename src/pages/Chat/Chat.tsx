import { Outlet } from "react-router-dom";

export const Chat: React.FC = () => {
  return (
    <>
      <h1>Chat Page</h1>
      <Outlet />
    </>
  );
};
