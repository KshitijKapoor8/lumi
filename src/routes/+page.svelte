<script lang="ts">
  import { goto } from "$app/navigation";
  import Loading from "$lib/loading.svelte"
  let search:string = "";

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log(search)
    goto("/search="+search)
  }
</script>

<div class="flex flex-col h-screen w-screen justify-center items-center bg-wave bg-no-repeat bg-cover bg-center">
  <img class= "h-[25%] object-cover absolute bottom-5 left-10" src="official_lumi_logo (1).png" alt="temporary logo" style="transform: rotate(20deg)">
  <h1 class="text-7xl font-bold font-mono text-slate-400">
    Lumi
  </h1>
  <div class = "pt-5 min-w-[25%]">
    <form class>
      <label for="default-search" class="mb-2 text-2x1 font-large text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute pt-4 left-0 items-center pl-3">
          <svg class="h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <Loading/>
        </div>
          <input type="search" id="default-search" class= "block w-full p-4 pl-10 text-sm text-gray-900 border-[50%] border-gray-300 rounded-lg bg-slate-600 ring-1 ring-yellow ring-opacity-50 custom-shadow" placeholder="Search Lumi..." required>
          <button type="submit"> </button>
    </form>
  </div>
  <img class= "h-[25%] object-cover absolute bottom-5 left-10" src="/official_lumi_logo (1).png" alt="temporary logo" style="transform: rotate(20deg)">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="done" style="transform: rotate(20deg); margin-left: 650px; margin-bottom: 550px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="done" style="transform: rotate(20deg); margin-left: 1200px; margin-bottom: 200px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(40deg); margin-right: 650px; margin-top: 200px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(20deg); margin-right: 1100px; margin-top: 200px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(60deg); margin-right: 850px; margin-bottom: 00px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(60deg); margin-left: 1000px; margin-bottom: 00px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(60deg); margin-right: 1100px; margin-bottom: 100px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(20deg); margin-right: 500px; margin-bottom: 300px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(80deg); margin-right: 550px; margin-bottom: 100px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(20deg); margin-right: 150px; margin-bottom: 450px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(40deg); margin-left: 250px; margin-bottom: 350px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(40deg); margin-left: 500px; margin-bottom: 250px">
  <img class= "h-[2%] absolute " src="/firefly.png" alt="temporary logo" style="transform: rotate(20deg); margin-left: 900px; margin-bottom: 450px">
  <img class= "h-[2%] absolute " src="/firefly.png" alt="temporary logo" style="transform: rotate(80deg); margin-left: 850px; margin-bottom: 150px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(0deg); margin-left: 1400px; margin-top: 200px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(40deg); margin-left: 600px; margin-top: 100px">
  <img class= "h-[2%] absolute" src="/firefly.png" alt="temporary logo" style="transform: rotate(20deg); margin-left: 1050px; margin-bottom: 600px">
  <img class= "h-[2%] absolute " src="/firefly.png" alt="temporary logo" style="transform: rotate(50deg); margin-left: 150px; margin-top: 300px">
  <img class= "h-[2%] absolute " src="/firefly.png" alt="temporary logo" style="transform: rotate(50deg); margin-left: 1250px; margin-bottom: 500px">
</div>
<style lang="postcss">

.custom-shadow:focus {
  box-shadow: 0 0 10px #FFF8DC, 0 0 15px #FFF8DC, 0 0 20px #FFF8DC, 0 0 25px #FFF8DC;
}

</style>