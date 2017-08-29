class Api {
  constructor() {
    this.url = 'http://api.jyotish.gift/api/v1/auth/'
  }

  requestSignIn = (user) => {
    return this.fetch('login', user);
  }

  requestSignUp = (user) => {
    return this.fetch('signup/', user);
  }

  fetchUsers = (token) => {
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return fetch(this.url + 'secret', options).then(data => data.json()).then(data => data).catch(e => console.error(e));
  }

  fetch = (url, requestBody) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(requestBody)
    };
    return fetch(this.url + url, options).then(data => data.json()).then(data => data).catch(e => console.error(e));
  }
}

export default Api = new Api();