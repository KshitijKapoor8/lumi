import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { TMDB_USERNAME } from '$env/static/private';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('query');
    console.log(searchQuery)

    const link = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;
    console.log(link)
    const res : Response = await fetch(link, {
        headers: {
            Authorization: 'Bearer ' + TMDB_USERNAME,
            accept: 'application/json'
        }
    })

    if (!res.ok) {
        // Handle error response
        console.error("boohoo")
    }

    const data = await res.json()
    return new Response(JSON.stringify(data))
}