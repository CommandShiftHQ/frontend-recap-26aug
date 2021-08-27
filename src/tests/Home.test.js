import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home";
describe("Home", () => {
  test("renders learn react link", () => {
    render(<Home />);
    const linkElement = screen.getByText("Enter");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders FrontEnd Recap information when Enter button is clicked", () => {
    render(<Home />);
    const button = screen.getByText("Enter");
    fireEvent.click(button);
    const recapText = screen.getByText("FrontEnd Recap");
    expect(recapText).toBeInTheDocument();
  });
});
