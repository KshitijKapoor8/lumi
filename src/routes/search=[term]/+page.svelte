<script lang="ts">
    import { page } from '$app/stores'

    export let data
    let { tiktokData, redditData } = data
    console.log(tiktokData)
</script>

<div class="[&>*:nth-child(4n+1)]:bg-red-500 [&>*:nth-child(4n+1)]:col-span-2 [&>*:nth-child(4n)]:bg-blue-500 [&>*:nth-child(4n)]:row-span-2 bg-[#16262E] h-full w-full grid grid-cols-tiles gap-3 p-3 auto-rows-[375px] auto-cols-[375px] grid-flow-dense">
    {#each tiktokData as tiktok}
        <div class="after:content-[''] after:block after:pb-[100%] bg-white">
            <embed  src="https://www.tiktok.com/embed/{tiktok}" class="w-full h-full"/>
        </div>
    {/each}
</div>