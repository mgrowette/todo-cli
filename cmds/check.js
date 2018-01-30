const store = require('../lib/store')
const { map, curry, not } = require('ramda')
const ls = require('./ls')

module.exports = function(itemToCheck) {
  store.set(
    map(
      todo =>
        todo.id === Number(itemToCheck)
          ? { ...todo, completed: not(todo.completed) }
          : todo,
      store.get()
    )
  )

  return ls()
}
