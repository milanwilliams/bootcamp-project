const casual = require('casual')

casual.define('hobby', () => ({
  id: casual.uuid,
  hobby: casual.random_element([
    'SPORTS',
    'ARTS',
    'MUSIC',
    'READING',
    'TRAVEL',
    'DINING',
    'CODING',
  ]),
  name: casual.random_element([
    'Bliss',
    'Jada',
    'Diego',
    'Dalton',
    'Elizabeth',
    'Kofi',
    'Spencer',
  ]),
}))

const hobbies = [...Array(15).keys()].map(() => casual.hobby)

module.exports = hobbies
