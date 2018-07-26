import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Book from "./Book";
import Author from "./Author";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the book component of the app ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Book />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

it("renders the Authors component of the app ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Author />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
