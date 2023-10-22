import ai from '$lib/gpt/ai';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ url }) => {
    const response = await ai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hello!"}]
    });

    
    return new Response()
}