import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username =
    faker.person.firstName() + randomNumber.toLowerCase().trim();
  const email = faker.internet.email();
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };
