import $ from "jquery";

import { service as SERVICE } from "../config.json";

import ApiFactory from "../api/ApiFactory";
import Table from "../components/table";

class TestTakers {
  constructor() {
    this._api = new ApiFactory(SERVICE);
    this._table = new Table();
  }

  async showAsTable() {
    const users = await this._api.getUsers();
    this._table.setData(users, document.getElementsByTagName("article"));
  }
}

export default TestTakers;
