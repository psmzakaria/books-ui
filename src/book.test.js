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

it("renders title and authorlist after the component mount", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        Title: "Charlie and chcolate factory",
        _id: "478957854897"
      },
      {
        name: "Dolly Lama a Good life ",
        _id: "473895869547"
      }
    ])
  );

  const renderer = new ShallowRenderer();
  renderer.render(<Book />);
  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
