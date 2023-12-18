"use client";

import React, { useState, useRef, FormEvent, FC } from "react";
import { observer } from "mobx-react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Highlight from "@/components/Hightlight";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import { themeStore } from "@/store/ThemeStore";
import {
  dark as darkTheme,
  light as lightTheme,
} from "@/components/ThemeRegistry/colorValues";

const EmailForm: FC = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const theme = themeStore.theme === "dark" ? darkTheme : lightTheme;

  const resetForm = () => {
    setEmail("");
    setMessage("");
  };

  const submitForm = async () => {
    try {
      const response = await fetch("../../api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setResponseMessage(data.message);
        resetForm();
      } else {
        setError(true);
        setResponseMessage(data.message);
      }
    } catch (error) {
      setError(true);
      setResponseMessage(`An error occurred: ${error}}`);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      recaptchaRef.current?.execute();
    } else {
      submitForm();
    }

    setIsSending(false);
  };

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    if (!captchaCode) {
      return;
    }
    setToken(captchaCode);
    submitForm();
  };

  return (
    <>
      {isSending && (
        <LinearProgress
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9000,
          }}
          color="secondary"
        />
      )}
      {(isSuccess || isError) && (
        <Snackbar
          open={isSuccess || isError}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setSuccess(false)}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity={isSuccess ? "success" : "error"}
          >
            {responseMessage}
          </Alert>
        </Snackbar>
      )}

      <Typography variant="h4" component="h4" gutterBottom mt={5}>
        <Highlight>Lets connect!</Highlight>
      </Typography>

      <Typography variant="body1" gutterBottom>
        My career has been a journey of continuous learning and growth, and I am
        always on the lookout for the next exciting challenge. Let's connect and
        see how we can build the future together.
      </Typography>
      <form onSubmit={handleSubmit}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_reCAPTCHAKey!}
          onChange={onReCAPTCHAChange}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Typography
          variant="caption"
          color={themeStore.theme === "dark" ? "white" : theme.primary.dark}
        >
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              color={themeStore.theme === "dark" ? "secondary" : "primary"}
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="https://policies.google.com/terms"
              target="_blank"
              color={themeStore.theme === "dark" ? "secondary" : "primary"}
            >
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </Typography>

        <Button
          type="submit"
          variant="contained"
          disabled={isSuccess}
          color={themeStore.theme === "dark" ? "secondary" : "primary"}
        >
          Send
        </Button>
      </form>
    </>
  );
});

export default EmailForm;
