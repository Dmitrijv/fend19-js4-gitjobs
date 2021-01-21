import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";

describe("Test start page structure", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("start page has a 'Search' button", () => {
    expect(wrapper.find("button").text()).toContain("Search");
  });

  it("start page has a job description field", () => {
    expect(wrapper.find("input").props().name).toBe("job-description");
  });
});
