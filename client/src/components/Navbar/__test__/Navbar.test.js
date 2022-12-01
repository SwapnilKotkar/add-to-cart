import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";

import Navbar from "../Navbar";

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  test("component should be render", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toBeTruthy();
  });

  test("logo should have Title text", () => {
    render(<Wrapper />);
    const headingElement = screen.getByText(/products/i);
    expect(headingElement).toBeInTheDocument();
  });
});
