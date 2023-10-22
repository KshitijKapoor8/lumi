<script lang="ts">
    import { page } from '$app/stores'
	import { parse } from 'svelte/compiler';

    export let data
    let { tiktokData, redditData, wikiData, tmdbData, urbData} = data
    // console.log(tiktokData)
    // console.log(redditData[2])
    // console.log("here?" + JSON.stringify(wikiData[1]))
    // console.log("here?" + JSON.stringify(tmdbData[1]))

</script>

<div class="[&>*]:bg-[#2e4756] [&>*]:rounded-2xl bg-[#16262E] h-full w-full grid grid-cols-tiles gap-3 p-3 auto-rows-[425px] auto-cols-[400px] grid-flow-dense">
    {#each tiktokData as tiktok}
        <div class="after:content-[''] after:block after:pb-[100%] row-span-2 bg-white">
            <embed  src="https://www.tiktok.com/embed/{tiktok}" class="w-full h-full"/>
        </div>
    {/each}
    {#each redditData as reddit}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <div class="px-4">
                    <div class="text-2xl font-semibold">{reddit.title}</div>
                    <div class="text-xl font-semibold">r/{reddit.subreddit}</div>
                </div>
                {#if reddit.url} 
                <div class="flex items-center justify-center w-4/5 bg-[#1d313b] rounded-md">
                    <img alt="" src={reddit.url} class="self-center object-contain"/>
                </div>
                {/if}       
            </div>
        </div>
    {/each}

    {#each wikiData as wiki}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <div class="px-4">
                    <div class="text-2xl font-semibold">{wiki.title}</div>
                    <div class="text-xl font-semibold">{wiki.snippet}</div>
                </div>   
            </div>
        </div>
    {/each}

    {#each tmdbData as tmdb}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <div class="px-4">
                    <div class="text-2xl font-semibold">{tmdb.original_title}</div>
                    <div class="text-xl font-semibold">{tmdb.overview.slice(0,200)}...</div>
                </div>   
            </div>
        </div>
    {/each}

    {#each urbData as urb}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <div class="px-4">
                    <div class="text-2xl font-semibold">{urb.word}</div>
                    <div class="text-xl font-semibold">{urb.definition}</div>
                </div>   
            </div>
        </div>
    {/each}
</div>