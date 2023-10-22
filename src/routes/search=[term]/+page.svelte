<script lang="ts">
	
    import { getContext, onMount } from 'svelte'
    import { writable } from 'svelte/store'

    export let data: any
    const { grid2, bigs, smalls, test, sourceData } = data.props.data;
    const wikiData = sourceData.wikiData;
    const redditData = sourceData.redditData;
    const tiktokData = sourceData.tiktokData;
    const tmdbData = sourceData.tmdbData;
    const urbData = sourceData.urbData;
    console.log("HI " + grid2)    


    // onMount(() => {
    //     if (data && data.grid2) {
    //         const { grid2 } = data;
    //         for (let i = 0; i < grid2.length; i++) {
    //             for (let j = 0; j < grid2[0].length; j++) {
    //                 console.log(grid2[i][j]);
    //             }
    //         }
    //     } else {
    //         console.error('data or grid2 is undefined');
    //     }
    // });
        
    // console.log(tiktokData)
    // console.log(redditData[2])
    // console.log(wikiData)
</script>

<div class="flex flex-col items-center w-full h-full select-none">
    <div class="flex-[0] static w-full bg-[#1d313b] flex flex-row">
        <img class="h-30 w-20 ml-5 pt-5" src="/official_lumi_logo (1).png" alt="lumi logo">
        <h1 class="font-mono font-bold select-none text-5xl pt-14 text-slate-400">
            Lumi
        </h1>
    </div>
    {#each grid2 as row}
    {#each row as elem}
    <div class=" [&>*]:bg-[#1d313b] [&>*]:rounded-2xl  h-full w-[97.5%] grid grid-cols-tiles gap-3 p-3 auto-rows-[400px] auto-cols-[400px] grid-flow-dense self-center flex-row">
        <!-- Rendering Tiktok -->
        {#if elem == 'tiktok'}
            <div class="after:content-[''] after:block after:pb-[100%] row-span-2 bg-white">
                <div class="flex flex-col items-center justify-center w-full h-full p-4">
                    <embed src="https://www.tiktok.com/embed/{tiktokData.videos[0].id}" class="w-[89%] h-[97%]"/>
                    <div class="flex flex-row justify-around [&>*]:mx-3 w-10">
                        <button class="px-3 mt-3 text-gray-600 bg-gray-700 rounded-full" >Next</button>
                        <button class="px-3 mt-3 text-gray-600 bg-gray-700 rounded-full" >Previous</button>
                    </div>
                </div>
            </div> 
        {/if}
        {#if elem == "reddit"}
        <!-- Rendering Reddit -->
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col p-4">
            <div class="flex flex-row ">
                <img src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" class="w-10 h-10" alt="reddit logo">
                <div class="flex flex-col items-center justify-center w-full h-full select-none">
                    <div class="self-start px-4">
                        <div class="text-2xl font-semibold text-gray-300">{redditData[0].title}</div>
                        <div class="text-xl font-semibold text-slate-600">r/{redditData[0].subreddit}</div>
                    </div>
                    {#if redditData[0].url} 
                    <div class="flex-auto w-4/5 t-5">
                        <img alt="" src={redditData[0].url} class="self-center object-contain"/>
                    </div>
                    {/if}
                </div>
            </div>
        </div>
        {/if}
        {#if elem == "wiki"}
        <!-- Rendering Wikipedia -->
        <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
            <div class="flex flex-col w-full h-full p-4">
                <div class="flex flex-row">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" class="w-10 h-10" alt="wikipedia logo">
                    <div class="w-4/5 px-4">
                        <div class="text-2xl font-semibold text-gray-300">{wikiData[0].title}</div>
                        
                        <div class="text-xl font-semibold text-gray-300 break-words">{@html wikiData[0].snippet}...</div>
                    </div>  
                </div>
            </div>
        </div>
        {/if}
        {#if elem == "tmdb"}
        {#each tmdbData as tmdb}
            <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
                <div class="flex flex-col items-left pt-[5%] w-full h-full">
                    <div class="px-4 flex flex-row">
                        <img src = "https://play-lh.googleusercontent.com/1VxftIinnfbrJSX7rS_NUNzcMYunfIw4b1rxL9QEZYCzd2sRYJ5Mmpq2oiKmn-PZZ-4=w240-h480-rw" class="w-8 h-8" alt="moviedb logo">
                        <div class="text-2xl font-semibold text-gray-300 pl-[3%]">{tmdb.original_title}</div>
                    </div>   
                    <div class="text-xl font-semibold text-gray-300 pl-[15%]">{tmdb.overview.slice(0,200)}...</div>
                </div>
            </div>
        {/each}
        {/if}
        {#if elem == "urban"}
            {#each urbData as urb}
            <div class="after:content-[''] after:block after:pb-[100%] bg-white flex-col">
                <div class="flex flex-col items-left pt-[5%] w-full h-full">
                    <div class="px-4 flex flex-row">
                        <img src = "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/u8zidc2jnlhz3n1dcbrr" class="w-8 h-8" alt="urb logo">
                        <div class="text-2xl font-semibold text-gray-300 pl-[3%]">{urb.word}</div>
                        <div class="text-xl font-semibold text-gray-300 pl-[15%]">{urb.definition}</div>
                    </div>   
                </div>
            </div>
            {/each}
        {/if}
                
    </div> 
    {/each}
    {/each}
</div>
<style lang="postcss">
    :global(html) {
      background-color: #16262E;
    }
</style>
