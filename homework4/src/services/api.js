const url = 'http://api.jyotish.gift/api/v1/auth/';
/*

 const optionsTemp = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `email=${email}&user=${name}&password=${password}`,
    mode: 'no-cors'
  }
*/

export const requestSignIn = (name, password) => {
  const optionsTemp = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `user=${name}&password=${password}`,
    mode: 'no-cors'
  }
  return fetch(url + 'login', optionsTemp).then(data => data.json()).catch(e => console.error(e));
}

export const requestSignUp = (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(user)
  };
  return fetch(url + 'signup/', options).then(data => data.json()).then(data => data).catch(e => console.error(e));
}

