import React, { lazy } from "react";
import { Dropdown } from "teemsly";
import { BsAppIndicator } from "react-icons/bs";
import { ComponentCommonProps, useClassName } from "../../../utils";

const NotificationEmpty = lazy(() => import("./NotificationEmpty"));

export interface TopbarNotificationProps extends ComponentCommonProps {}

const TopbarNotification = (props: TopbarNotificationProps) => {
  const { children, className, ...rest } = props;

  const { merge, addClassNames } = useClassName("topbar-notification");
  const classes = merge(className, addClassNames());

  return (
    <Dropdown
      className={classes}
      placement="bottomEnd"
      menuStyle={{ marginTop: "12px", width: "300px" }}
      renderToggle={() => {
        return <BsAppIndicator />;
      }}
      {...rest}
    >
      <div className={addClassNames("label")}>Notification</div>
      <React.Suspense fallback="Loading notification">
        <NotificationEmpty />
      </React.Suspense>
    </Dropdown>
  );
};

export default TopbarNotification;
