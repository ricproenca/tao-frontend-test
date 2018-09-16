import CsvAdapter from "./adapters/CsvAdapter";
import JsonAdapter from "./adapters/JsonAdapter";
import RestAdapter from "./adapters/RestAdapter";

import customError from "../components/customError";

class ApiFactory {
  constructor(adapter) {
    switch (adapter) {
      case "json":
        this._adapter = new JsonAdapter();
        break;
      case "csv":
        this._adapter = new CsvAdapter();
        break;
      case "rest":
        this._adapter = new RestAdapter();
        break;
      default:
        customError(`The API adapter ${adapter} does not exist.`);
    }
  }

  async getUsers() {
    return await this._adapter.getUsers();
  }
}

export default ApiFactory;
