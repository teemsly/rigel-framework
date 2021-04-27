import React from "react";
// import { Topbar } from "teemsly"; // this will use later.
import { TopbarProfile } from "./Profile";
import { TopbarNotification } from "./Notification";
import { addClassName } from "../../utils";
import { TopbarQuickAccess } from "./QuickAccess";

const AppTopbar = () => {
  return (
    <div className={addClassName("page-topbar")}>
      <TopbarQuickAccess />
      <TopbarNotification />
      <TopbarProfile />
    </div>
  );
};

export default AppTopbar;
