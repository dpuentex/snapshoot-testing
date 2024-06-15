// src/GitHubCard.test.js
import React from "react";
import renderer from "react-test-renderer";
import GitHubCard from "./GitHubCard";

test("GitHubCard renders correctly", () => {
  const tree = renderer.create(<GitHubCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
