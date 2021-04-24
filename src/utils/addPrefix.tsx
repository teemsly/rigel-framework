/**
 * This function for add prefix of the class name.
 */

import _ from "lodash";
import classnames from "classnames";

export const defultPrefix = "ts";

export const getDefaultPrefix = () => {
  return defultPrefix;
};

export const addPrefix = (
  prefix: string,
  className: string | string[]
): string => {
  if (!prefix || !className) {
    return "";
  }

  if (!prefix) {
    prefix = getDefaultPrefix();
  }

  if (_.isArray(className)) {
    let classNames = className
      .filter((name) => !!name)
      .map((name) => `${prefix}-${name}`);
    return classnames(classNames);
  }

  return `${prefix}-${className}`;
};

export const addClassName = (classnames: string | string[]) => {
  return addPrefix(getDefaultPrefix(), classnames);
};

export default _.curry(addPrefix);
