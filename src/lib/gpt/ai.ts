import OpenAI from 'openai'
import { OPENAI_KEY } from '$env/static/private'


const ai = new OpenAI({
    apiKey: OPENAI_KEY,
})



export default ai;