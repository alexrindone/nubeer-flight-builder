import { http } from './APIService';
import Beer from '../interfaces/Beer';

// TODO: add login or store this test api_key within an environment
const API_KEY = '5e092434-302a-40f0-adf2-b8e0e507f72c'

type params = {
    search: string,
    page?: number
}

async function searchBeers(params: params): Promise<Beer[]> {
    const { search, page = 1 } = params;

    // hardcoding Northwood until endpoint is updated to have filter for brewery
    return await http<Beer[]>(
        `https://nubeer.io/api/v2/search?auth=${API_KEY}&search=Northwood+${search}&page=${page}`
    );
}

export default searchBeers;