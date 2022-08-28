const React = require('react')
const Default = require('./layouts/Default')

function Edit ({coffee, index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
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
          <label htmlFor="hasGluten">Has Caffeine?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasCaffeine}
          />
          <br />
          <input type="submit"/>
          
        </form>
      </Default>
    )
}

module.exports = Edit
