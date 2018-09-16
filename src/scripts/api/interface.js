import { API_URL } from "../config.json";

class Interface {
  get() {
    this._handleError("You must implement getUser method!");
  }

  getAll() {
    this._handleError("You must implement getAll method!");
  }

  _handleError(msg) {
    throw Error(`Service Interface Error: ${msg}`);
  }
}

export default Interface;
