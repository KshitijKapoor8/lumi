import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import { YOUTUBE_USERNAME } from '$env/static/private';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('q');

    const result = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=none&maxResults=1&order=relevance&key=AIzaSyC-YdomnOmZ-is0ZYzBTU0U0EJUanyncUE`;
    const link = `https://www.youtube.com/watch?v=result.videoId`;


    const res : Response = await fetch(link, {
        headers: {
            'Authorization': 'Bearer 678570625079-ok0l2ei2m5vfs1jjs5r9lpv8bl4i0ae6.apps.googleusercontent.com',
            'Accept': 'application/json',
        }
    })

    if (!res.ok) {
        // Handle error response
        console.error("BAD")
    }

    const data = await res.json()
    return new Response(JSON.stringify(data))
}