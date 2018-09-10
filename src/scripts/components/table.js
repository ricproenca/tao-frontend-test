const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

class Table {
  constructor(parent = undefined) {
    this._parent = parent;
    this._elementAsString = "";
  }

  append(data) {
    let str = '<table class="table-users table" border="0"><tbody>';
    data.map(item => {
      str += `<tr>
      <td width="10" align="center align-middle">
      <img class="pull-left img-circle nav-user-photo" width="50"
      src="${item.picture}" />
      </td>
      <td class="align-middle">${capitalize(item.title)} ${capitalize(
        item.firstName
      )} ${capitalize(item.lastName)}</td>`;
    });
    str += "</tbody></table>";
    this._elementAsString = str;

    this._parent.append(this._elementAsString);
  }
}

export default Table;
