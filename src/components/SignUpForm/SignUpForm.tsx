import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonStyles,
  paperStyles,
} from "./styles";

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <Paper sx={paperStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        Create account and start chatting
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={formStyles}
      >
        <TextField
          fullWidth
          required
          label="Login"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setName(e.target.value)
          }
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setEmail(e.target.value)
          }
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setPassword(e.target.value)
          }
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={buttonStyles}
        >
          Sign up
        </Button>
      </Box>
    </Paper>
  );
};
