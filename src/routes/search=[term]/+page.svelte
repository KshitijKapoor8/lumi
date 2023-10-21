<script lang="ts">
    import { page } from '$app/stores'

    export let data
    let term = data.term
</script>

<div class="[&>*:nth-child(4n+1)]:bg-red-500 [&>*:nth-child(4n+1)]:col-span-2 [&>*:nth-child(4n)]:bg-blue-500 [&>*:nth-child(4n)]:row-span-2 bg-[#16262E] h-full w-full grid grid-cols-tiles gap-3 p-3 auto-rows-[375px] auto-cols-[375px] grid-flow-dense">
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 1</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 2</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 3</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">
    <embed src="https://www.tiktok.com/embed/7044234295233252609" class="w-full h-full"/>
  </div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 5</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 6</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 7</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 8</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 9</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 10</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 11</div>
  <div class="after:content-[''] after:block after:pb-[100%] bg-white">Element 12</div>
</div>