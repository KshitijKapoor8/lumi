import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { URB_USERNAME } from '$env/static/private';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('term');
    console.log(searchQuery)

    const link = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchQuery}`;
    console.log(link)
    const res : Response = await fetch(link, {
        headers: {
            'X-RapidAPI-Key': URB_USERNAME,
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        // Handle error response
        console.error("boohoo")
    }

    const data = await res.json()
    return new Response(JSON.stringify(data))
}