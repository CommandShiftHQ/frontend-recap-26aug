import { render } from "@testing-library/react";
import CatFacts from "../components/CatFacts";

describe("CatFacts", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<CatFacts />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("10 cat facts are rendered", () => {
    const { getAllByTestId } = render(<CatFacts />);
    expect(getAllByTestId("catFact")).toHaveLength(10);
  });
});
