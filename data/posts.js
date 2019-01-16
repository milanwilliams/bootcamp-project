const casual = require('casual')

casual.define('post', () => ({
  id: casual.uuid,
  content: casual.sentences(2),
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

const posts = [...Array(15).keys()].map(() => casual.post)

module.exports = posts
