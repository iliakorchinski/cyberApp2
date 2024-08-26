const { readData, writeData } = require('./util');

async function login(username, password) {
  const data = await readData();
  const user = data.users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error('Could not find any users with this username');
  }

  return user;
}

exports.login = login;
