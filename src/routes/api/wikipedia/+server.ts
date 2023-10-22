import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';


export const GET: RequestHandler = async ({ url }) => {

    const searchQuery = url.searchParams.get('srsearch');
    console.log(searchQuery)

    const link = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`;
    console.log(link)
    const res : Response = await fetch(link, {
    })

    if (!res.ok) {
        // Handle error response
        console.error("boohoo")
    }

    const data = await res.json()
    return new Response(JSON.stringify(data))
}