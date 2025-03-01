export type NotificationType = "success" | "message" | "caution" | "error";

export interface NotificationProps {
  message: string;
  type?: NotificationType;
}