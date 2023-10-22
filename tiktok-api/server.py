from TikTokApi import TikTokApi
import asyncio
import sys


async def get_hashtag_videos():
    async with TikTokApi() as api:
        await api.create_sessions(num_sessions=1, sleep_after=2, override_browser_args=["--incognito"], headless=False)
        tag = api.hashtag(name=sys.argv[1])
        async for video in tag.videos(count=30):
            print(video.id)


asyncio.run(get_hashtag_videos())
