import React from "react";
import { BiNotificationOff } from "react-icons/bi";
import { useClassName } from "../../../utils";

const NotificationEmpty = () => {
  const { addClassNames } = useClassName("topbar-notification");

  return (
    <div className={addClassNames("empty")}>
      <BiNotificationOff />
      <div>No Notification</div>
      <p>
        When your team starts working on things, we’ll show the notifications
        here.
      </p>
    </div>
  );
};

export default NotificationEmpty;
