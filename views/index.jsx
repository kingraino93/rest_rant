const React = require('react')
const Default = require('./layouts/Default')

function Index({ coffee }) {
    return (
        <Default>
            <h2>Index Page</h2>
            <p>I have {coffee[0].name} coffee!</p>
            <ul>
                {
                    coffee.map((coffee, index) => {
                        return (
                            <li key={index}>
                                <a href={`/coffee/${index}`}>
                                    {coffee.name}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </Default>
    )
}

module.exports = Index
