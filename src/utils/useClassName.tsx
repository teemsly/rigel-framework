import { useCallback } from "react";
import classNames from "classnames";
import { addPrefix } from "./addPrefix";

const useClassName = (classPrefix: string) => {
  const globalPrefix = "ts";
  const componentPrefix = addPrefix(globalPrefix, classPrefix);

  const setPrefix = useCallback(
    (...classes: any[]) => {
      const prefixingClasses = classes?.length
        ? classNames(...classes)
            ?.split(" ")
            ?.map((item: string, _: number) => {
              return addPrefix(componentPrefix, item);
            })
        : [];

      return prefixingClasses?.map((cls) => cls).join(" ");
    },
    [componentPrefix]
  );

  const addClassNames = useCallback(
    (...classes: any[]) => {
      const mergeClasses = setPrefix(classes);
      return mergeClasses
        ? `${componentPrefix} ${mergeClasses}`
        : componentPrefix;
    },
    [componentPrefix, setPrefix]
  );

  return { merge: classNames, addClassNames };
};

export default useClassName;
