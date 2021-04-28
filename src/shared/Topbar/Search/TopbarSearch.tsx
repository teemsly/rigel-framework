import React from "react";
import { Input, InputGroup } from "teemsly";
import { BiSearchAlt } from "react-icons/bi";
import { ComponentCommonProps, useClassName } from "../../../utils";

export interface TopbarSearchProps extends ComponentCommonProps {}

const TopbarSearch = (props: TopbarSearchProps) => {
  const { children, className, ...rest } = props;

  const { merge, addClassNames } = useClassName("topbar-search");
  const classes = merge(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      <InputGroup size="sm">
        <InputGroup.Addon>
          <BiSearchAlt size="18" />
        </InputGroup.Addon>
        <Input
          name="search"
          placeholder="Search"
          style={{ borderRadius: "28px" }}
        />
      </InputGroup>
    </div>
  );
};

export default TopbarSearch;
