import { FC, useCallback, useState } from "react";
import { Notification } from "./Notification";
import { AuthorizationForm } from "./AuthorizationForm";

export const AuthorizationPage: FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const handleCloseNotification = useCallback(() => setShowNotification(false), []);
  const handleOpenNotification = useCallback(() => setShowNotification(true), []);

  return (
    <div className="authorization-page">
      <p className="title">Sign up</p>
      <AuthorizationForm onSubmit={handleOpenNotification} />
      {showNotification && <Notification onClick={handleCloseNotification} />}
    </div>
  );
};
