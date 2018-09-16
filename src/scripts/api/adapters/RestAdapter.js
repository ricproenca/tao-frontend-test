import Interface from "../interface";

import { restApiUrl as REST_API_URL } from "../../config.json";

async function asyncFetch(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

class RestAdapter extends Interface {
  async getUsers() {
    const url = `${REST_API_URL}users`;
    const users = await asyncFetch(url);
    const preparedUsers = await this._prepareUsers(users);
    return preparedUsers;
  }

  _getUser(userId) {
    const url = `${REST_API_URL}user/${userId}`;
    return asyncFetch(url);
  }

  async _prepareUsers(users) {
    const promises = [];
    users.map(item => {
      promises.push(this._getUser(item.userId));
    });
    return Promise.all(promises);
  }
}

export default RestAdapter;
