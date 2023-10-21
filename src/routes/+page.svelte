<script lang="ts">
  import { goto } from "$app/navigation";
  let search:string = "";

  function handleSubmit(event: Event) {
    event.preventDefault();
    goto("search="+search)
  }
</script>

<div class="flex flex-col bg-[#16262E] h-screen w-screen justify-center items-center ">
  <h1 class="text-4xl font-bold font-mono text-slate-400">
    Lumi
  </h1>

  <div class = "pt-5 min-w-[25%]">
    <form class>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute pt-4 left-0 items-center pl-3">
          <svg class="h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
          <form on:submit={handleSubmit}>
            <input bind:value={search} type="search" id="default-search" class= "hover:bg-slate-600 block w-full p-4 pl-10 text-sm text-gray-900 border-[50%] border-gray-300 rounded-lg bg-gray-50" placeholder="Search Lumi..." required>
            <button type="submit">  </button>
          </form>
    </form>
  </div>
</div>