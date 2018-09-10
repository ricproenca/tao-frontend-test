import $ from "jquery";

import API from "../api/api";
import Table from "../components/table";

/**
 * The Users class
 *
 * @class Users
 */
class Users {
  constructor() {
    this._api = new API();
    this._table = new Table($("main"));
  }

  /**
   * List users using Table component
   * - get users from service
   * - prepare data
   * - append to DOM
   */
  async listUsers() {
    const users = await this._api.getUsers();
    const preparedUsers = await this._prepareUsers(users);
    this._table.append(preparedUsers);
  }

  /**
   * Prepare users data to insert into a table
   */
  async _prepareUsers(users) {
    const promises = [];
    users.map(item => {
      promises.push(this._api.getUser(item.userId));
    });
    return Promise.all(promises);
  }
}

export default Users;
