import Users from "./Users";

/**
 * The Main Application
 *
 * @class App
 */
class App {
  /**
   * Start the application
   * -
   */
  static async start() {
    const users = new Users();
    users.listUsers();
  }
}

export default App;
