const React = require('react')
const Default = require('./layouts/Default')

function Edit ({coffee, index}) {
    return (
      <Default>
        <h2>Cup of Coffee</h2>
        <form >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={coffee.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={coffee.image}
            />
          <label htmlFor="has">Has Caffeine?</label>
          <input
            type="checkbox"
            name="hasCaffeine"
            id="hasCaffeine"
            defaultChecked={coffee.hasCaffeine}
          />
          <br />
          <input type="submit"/>
          
        </form>
      </Default>
    )
}

module.exports = Edit
