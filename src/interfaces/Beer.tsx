interface Beer {
    id: number,
    name: string,
    style: string,
    abv: string,
    brewery: Brewery
}

interface Brewery {
    id: number,
    name: string,
}

export default Beer;