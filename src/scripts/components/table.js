import { tableColumns } from "../config.json";
import { capitalizeFirst } from "../utils/text";
class Table {
  constructor() {
    this._tbl = null;
  }

  _createImageCell(picture) {
    const img = document.createElement("img");
    img.className = "user-photo";
    img.setAttribute("src", picture);
    img.setAttribute("alt", "User photo");

    const fig = document.createElement("figure");
    fig.appendChild(img);

    return fig;
  }

  _fillHeaders(data) {
    const header = this._tbl.createTHead();
    const row = header.insertRow();
    tableColumns.map(column => {
      if (data[0][column.name]) {
        const cell = row.insertCell();
        cell.innerHTML = capitalizeFirst(column.name);
        cell.className = "user-headers";
      }
    });
  }

  _fillBody(data) {
    const body = this._tbl.createTBody();

    data.map(item => {
      const row = body.insertRow();
      tableColumns.map(column => {
        if (item[column.name]) {
          const cell = row.insertCell();
          switch (column.type) {
            case "text":
              cell.innerHTML = capitalizeFirst(item[column.name]);
              break;
            case "image":
              const img = this._createImageCell(item.picture);
              cell.appendChild(img);
              break;
            default:
              cell.innerHTML = "---";
          }
        }
      });
    });
    return body;
  }

  setData(data, parent) {
    this._data = data;

    this._tbl = document.createElement("table");
    this._tbl.className = "table-users table";

    this._fillHeaders(data);
    this._fillBody(data);

    parent[0].appendChild(this._tbl);
  }
}

export default Table;
