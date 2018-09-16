import TestTakers from "./TestTakers";

class App {
  static async start() {
    const testTakers = new TestTakers();
    testTakers.showAsTable();
  }
}

export default App;
