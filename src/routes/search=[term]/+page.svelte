<script lang="ts">
	import { writable } from 'svelte/store';

    export let data
    let { tiktokData, redditData, wikiData } = data
    let count = 0

    const incrementCount = () => {
        count = (count + 1) % tiktokData.length
    }

    const decrementCount = () => {
        count = (count - 1)
        if (count < 0) {
            count = tiktokData.length - 1
        }
    }
    // console.log(tiktokData)
    // console.log(redditData[2])
</script>

<div class="w-full h-full bg-[#16262E] flex items-center flex-col">
    <div class="flex-[0] static w-full bg-[#1d313b]">
        <h1 class="font-mono font-bold text-7xl text-slate-400">
            Lumi
        </h1>
    </div>
    <div class=" [&>*]:bg-[#1d313b] [&>*]:rounded-2xl  h-full w-[97.5%] grid grid-cols-tiles gap-3 p-3 auto-rows-[400px] auto-cols-[400px] grid-flow-dense self-center flex-row">
        <!-- Rendering Tiktok -->
        <div class="after:content-[''] after:block after:pb-[100%] row-span-2 bg-white">
            <div class="flex flex-col items-center justify-center w-full h-full p-4">
                <embed src="https://www.tiktok.com/embed/{tiktokData[count]}" class="w-[89%] h-[97%]"/>
                <div class="flex flex-row justify-around [&>*]:mx-3 w-10">
                    <button on:click={incrementCount} class="px-3 mt-3 text-gray-600 bg-gray-700 rounded-full" >Next</button>
                    <button on:click={decrementCount} class="px-3 mt-3 text-gray-600 bg-gray-700 rounded-full" >Previous</button>
                </div>
            </div>
        </div> 
        {#each redditData as reddit}
            <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col p-4">
                <div class="flex flex-row ">
                    <img src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" class="w-10 h-10" alt="reddit logo">
                    <div class="flex flex-col items-center justify-center w-full h-full select-none">
                        <div class="px-4">
                            <div class="text-2xl font-semibold text-gray-300">{reddit.title}</div>
                            <div class="text-xl font-semibold text-slate-600">r/{reddit.subreddit}</div>
                        </div>
                        {#if reddit.url} 
                        <div class="flex-auto w-4/5 t-5">
                            <img alt="" src={reddit.url} class="self-center object-contain"/>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}

    {#each wikiData as wiki}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col w-full h-full p-4">
                <div class="flex flex-row">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" class="w-10 h-10" alt="wikipedia logo">
                    <div class="w-4/5 px-4">
                        <div class="text-2xl font-semibold text-gray-300">{wiki.title}</div>
                        <div class="text-2xl font-semibold text-gray-600 break-words">{wiki.snippet}</div>
                    </div>  
                </div>
            </div>
        </div>
    {/each}
    </div> 
</div>
