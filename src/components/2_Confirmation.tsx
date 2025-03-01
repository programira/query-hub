import { useState } from "react";
import { Notification } from "./1_Notification";
import { NotificationProps } from "../types/notification";
import { Box, Button } from "@mui/material";

/*
  Now build on the Notification component by creating a Confirmation component. 
  This Confirmation component should return a Notification with two additional buttons
  to get the user's response accept and decline.

  When accept or decline are clicked, the Confirmation should no longer render. 
  Instead it should render null.

  PS: The buttons should be rendered by the Confirmation component, 
  not the Notification component (think React composition).
 */

type ConfirmationProps = NotificationProps & {
  accept: () => void;
  decline: () => void;
};

export function Confirmation({
  message,
  type = "message",
  accept,
  decline
}: ConfirmationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    accept();
  }
  const handleDecline = () => {
    setIsVisible(false);
    decline();
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Notification Message */}
      <Notification type={type} message={message} />

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAccept}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDecline}
        >
          Decline
        </Button>
      </Box>
    </>
  );
}
