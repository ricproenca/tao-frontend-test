const USERS_API_URL = "https://hr.oat.taocloud.org/v1/";

class ServiceInterface {
  async getUser(userId) {
    const url = `${USERS_API_URL}user/${userId}`;
    const response = await fetch(url);
    return await response.json();
  }

  async getUsers() {
    const url = `${USERS_API_URL}users`;
    const response = await fetch(url);
    return await response.json();
  }
}

export default ServiceInterface;
