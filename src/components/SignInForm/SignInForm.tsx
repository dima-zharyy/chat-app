import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonStyles,
  paperStyles,
} from "./styles";
import { SignUpLink } from "components";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <Paper sx={paperStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        Sign in and get fun
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
          Sign in
        </Button>
      </Box>
      <SignUpLink />
    </Paper>
  );
};
