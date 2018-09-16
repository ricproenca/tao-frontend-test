import Interface from "../interface";

import data from "../../../services/testtakers.json";

class JsonAdapter extends Interface {
  async getUsers() {
    return data;
  }
}

export default JsonAdapter;
