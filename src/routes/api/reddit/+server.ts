import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { REDDIT_ACCESS } from '$env/static/private';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('q');

    const link = `https://oauth.reddit.com/search.json?q=${searchQuery}`;


    const res : Response = await fetch(link, {
        headers: {
            'Authorization': `bearer ${REDDIT_ACCESS}`,
            'User-Agent': 'ChangeMeClient/0.1 by ShimadaShimado'
        }
    })

    if (!res.ok) {
        // Handle error response
        console.error("AAG")
    }

    const data = await res.json()
    return new Response(JSON.stringify(data))
}