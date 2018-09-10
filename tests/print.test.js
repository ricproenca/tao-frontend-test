import { dummyText } from "../src/scripts/constants/constants";

const EXAMPLE_TEXT = "Just a dummy text for testing JEST!";

describe("Just a dummy test", () => {
  it("is dummy text correct", () => {
    expect(dummyText).toBe(EXAMPLE_TEXT);
  });
});
