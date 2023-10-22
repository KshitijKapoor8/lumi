import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { TIKTOK_HOST } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {

    const hashtag = url.searchParams.get('q');
   
    const link = `http://${TIKTOK_HOST}/api/hashtag/${hashtag}`

    const res : Response = await fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!res.ok) {
        // Handle error response
        console.log("An error occured while fetching tiktok data")
    }
    const data = await res.json()
    return new Response(JSON.stringify(data))
  }
