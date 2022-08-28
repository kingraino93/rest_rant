const coffee = require("../models/coffee")

function Show({ coffee }) {
    // Confirm we are getting our coffee data in the terminal.
    // console.log(coffee.name)
    return (
        <Default>
            <h3>{coffee.name}</h3>


            <form action={`/coffee/${index}?_method=DELETE`} method="POST">
                <a href={`/coffee/${index}/edit`}><button>Edit</button></a>

                <input type='submit' value="DELETE" />
            </form>



            <p>
                and it
                {
                    coffee.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={coffee.image} alt={coffee.name} />
            <li><a href="/coffee">Go home</a></li>
        </Default>

    )
}

module.exports = Show
