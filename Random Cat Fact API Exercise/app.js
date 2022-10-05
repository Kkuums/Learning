const factParagraph = document.querySelector('#fact')

const factFetch = async () => {
    const res = await fetch('https://catfact.ninja/fact/')
    const randFact = await res.json()
    factParagraph.append(randFact.fact)
}

factFetch()
