import { FC } from "react";

interface NotificationProps {
  onClick(): void;
}

export const Notification: FC<NotificationProps> = ({ onClick }) => (
  <div className="notify-wrapper">
    <div className="notify">
      <p className="content">Sign up success</p>
      <button className="agree-btn" onClick={onClick}>
        Ok
      </button>
    </div>
  </div>
);
