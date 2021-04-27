import React from "react";
import { Dropdown } from "teemsly";
import { addClassName } from "../../../utils";
import { AiOutlinePlusCircle, AiOutlineProject } from "react-icons/ai";
import { BsCheckCircle, BsPeople } from "react-icons/bs";
import { GiConvergenceTarget } from "react-icons/gi";
import { RiUserShared2Line } from "react-icons/ri";

const TopbarQuickAccess = () => {
  return (
    <Dropdown
      className={addClassName("topbar-quick-access")}
      renderToggle={() => {
        return <AiOutlinePlusCircle />;
      }}
      placement="bottomEnd"
      menuStyle={{ marginTop: "12px", minWidth: "100px", width: "125px" }}
    >
      <Dropdown.Item>
        <BsCheckCircle /> Task
      </Dropdown.Item>
      <Dropdown.Item>
        <AiOutlineProject /> Project
      </Dropdown.Item>
      <Dropdown.Item>
        <GiConvergenceTarget /> Goal
      </Dropdown.Item>
      <Dropdown.Item>
        <BsPeople /> Team
      </Dropdown.Item>
      <Dropdown.Item>
        <RiUserShared2Line /> Invite
      </Dropdown.Item>
    </Dropdown>
  );
};

export default TopbarQuickAccess;
