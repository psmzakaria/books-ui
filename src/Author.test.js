import React from "react";
import ReactDOM from "react-dom";
import Author from "./Author";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders title and authorlist after the component mount", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        name: "roald Dhal",
        age: 29,
        _id:"47389577"
      },
      {
        name: "Dolly Lama",
        age: 99,
        _id:"473895789547"
      }
    ])
  );

  const renderer = new ShallowRenderer();
  renderer.render(<Author />);
  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
