import React from "react";
// import { Topbar } from "teemsly"; // this will use later.
import { TopbarProfile } from "./Profile";
import { TopbarNotification } from "./Notification";
import { addClassName } from "../../utils";
import { TopbarQuickAccess } from "./QuickAccess";
import { TopbarSearch } from "./Search";

const AppTopbar = () => {
  return (
    <div className={addClassName("page-topbar")}>
      <TopbarSearch />
      <TopbarQuickAccess />
      <TopbarNotification />
      <TopbarProfile />
    </div>
  );
};

export default AppTopbar;
