import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import ai from '$lib/gpt/ai'
import fs from 'fs'

export const POST: RequestHandler = async ({ request }) => {

    const allContents = fs.readFileSync('cat.txt', 'utf-8');
    let s = ""
    allContents.split(/\r?\n/).forEach((line : str) => {
        s += line + ";"
    });

    const prompt = await request.json();

    const response = await ai.chat.completions.create({
        model: "gpt-4",
        messages: [{"role": "user", "content": `I am going to give you a list of 1300 categories. Based on these categories, I need you to pick out five that best fit the prompt that follows. Here are the categories, they are separated by a semi-colon: ${s}. Now, here is the prompt: ${prompt.prompt}`}]
    });

    return new Response(JSON.stringify(response.choices[0].message.content))
}