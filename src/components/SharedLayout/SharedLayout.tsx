import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { containerStyle } from "./styles";

const HOST = "http://localhost:3000/";

export const SharedLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href === HOST) {
      navigate("signin", { replace: true });
    }
  }, [navigate]);

  return (
    <Container sx={containerStyle}>
      <Outlet />
    </Container>
  );
};
