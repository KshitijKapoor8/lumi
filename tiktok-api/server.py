from TikTokApi import TikTokApi
import asyncio
from fastapi import FastAPI

app = FastAPI()

@app.get("/hashtag", status_code=200)
def get_wrapper():
    return asyncio.run(get_hashtag_videos())

async def get_hashtag_videos():
    videos = []
    async with TikTokApi() as api:
        await api.create_sessions(num_sessions=1, sleep_after=3, override_browser_args=["--incognito"], headless=False)
        tag = api.hashtag(name="hashtag")
        async for video in tag.videos(count=30):
            videos.append(video)
    
    return videos


