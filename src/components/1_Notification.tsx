import React, { ReactNode } from "react";

/*
  This component should render the message, and set the className based on the type.

  success =>	notification notification-success
  message =>	notification notification-info
  caution	=>  notification notification-warning
  error	  =>  notification notification-danger

  When done, move to 2_Confirmation.tsx.
*/

export interface NotificationProps {
  message: string;
  type?: "success" | "message" | "caution" | "error";
  children?: ReactNode;
}

export function Notification({ message, type = "message" }: NotificationProps) {
  const typeClassMap: Record<string, string> = {
    success: "notification-success",
    message: "notification-info",
    caution: "notification-warning",
    error: "notification-danger",
  };

  const className = `notification ${typeClassMap[type] || "notification-info"}`;

  return <div className={className}>{message}</div>;
}
