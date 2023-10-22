import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { YELP_USERNAME } from '$env/static/private';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('term');
    const searchQuery2 = url.searchParams.get('location');

    const link = `https://api.yelp.com/v3/businesses/search?location=${searchQuery2}&term=${searchQuery}`;


    const res : Response = await fetch(link, {
        headers: {
            Authorization: 'bearer ' + YELP_USERNAME,
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