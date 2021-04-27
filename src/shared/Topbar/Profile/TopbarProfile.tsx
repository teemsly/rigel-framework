import React from "react";
import { Dropdown, Avatar } from "teemsly";
import {
  BsBoxArrowRight,
  BsClockHistory,
  BsPencil,
  BsTv,
} from "react-icons/bs";

const TopbarProfile = () => {
  return (
    <Dropdown
      renderToggle={() => {
        return (
          <Avatar size="sm" color="yellow" circle>
            ts
          </Avatar>
        );
      }}
      placement="bottomEnd"
      menuStyle={{ marginTop: "12px" }}
    >
      <Dropdown.Item>
        <BsPencil /> My Profile Settings
      </Dropdown.Item>
      <Dropdown.Item>
        <BsClockHistory /> Clock In
      </Dropdown.Item>
      <Dropdown.Item>
        <BsTv /> Admin Console
      </Dropdown.Item>
      <Dropdown.Item>Subscription</Dropdown.Item>
      <Dropdown.Item>Privacy Policy</Dropdown.Item>
      <Dropdown.Item>Help Center</Dropdown.Item>
      <Dropdown.Item>
        <BsBoxArrowRight /> Log Out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default TopbarProfile;
