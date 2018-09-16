import Interface from "../interface";

import data from "../../../services/testtakers.csv";

class CsvAdapter extends Interface {
  async getUsers() {
    return data;
  }
}

export default CsvAdapter;
