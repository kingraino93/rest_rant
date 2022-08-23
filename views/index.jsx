const React = require('react')
const Default = require('./layouts/Default')

function Index({ coffee }) {
    return (
        <Default>
            <h1>COFFEE LOVER</h1>
                <p>A French press is a coffee maker that brews ground coffee by steeping it in hot water and then plunging the mixture to push the grounds out. This pulls more of the flavor out of the coffee bean grounds for a high-quality coffee.</p>
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
