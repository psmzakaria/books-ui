import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders title and boollist after the component mount", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Book />);
  const instance = renderer.getMountedInstance();
  instance.componentDidMount();

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
