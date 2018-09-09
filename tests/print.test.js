import { text } from "../src/scripts/dummyText";

const EXAMPLE_TEXT = "Just a dummy text!";

describe("Dumb test", () => {
  it("dummy text", () => {
    expect(text).toBe(EXAMPLE_TEXT);
  });
});
