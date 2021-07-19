import { render, RenderResult } from "@testing-library/react";
import React from "react";

type Return = (newProps: Record<string, unknown>) => RenderResult;

const renderComponentCreator = (
  Component: React.FC<any>,
  propsFn = () => ({})
): Return => {
  return (newProps: Record<string, unknown>) => {
    const props = { ...propsFn(), ...newProps };

    return {
      props,
      ...render(<Component {...props} />),
    };
  };
};

export { renderComponentCreator };
