<script lang="ts">
  import { goto } from "$app/navigation";
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import type { LayoutData } from '$types'

  let search:string = "";
  export let data


  async function handleSubmit(event: Event) {
    event.preventDefault();
        
    goto(`/search=${search}`)
  }
</script>

<div class="flex flex-col h-screen w-screen justify-center items-center bg-wave bg-no-repeat bg-cover bg-center">
  <h1 class="text-7xl font-bold font-mono text-slate-400">
    Lumi
  </h1>
  <div class = "pt-5 min-w-[25%]">
    <form on:submit|preventDefault={handleSubmit}>
      <label for="default-search" class="mb-2 text-2x1 font-large text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute pt-4 left-0 items-center pl-3">
          <svg class="h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input bind:value={search} type="search" id="default-search" class= "hover:bg-slate-600 block w-full p-4 pl-10 text-sm text-gray-900 border-[50%] border-gray-300 rounded-lg bg-gray-50 ring-1 ring-yellow ring-opacity-50 custom-shadow" placeholder="Search Lumi..." required>
        <button type="enter"> </button>
    </form>
  </div>
  <img class="h-[50%] object-cover absolute bottom-0 left-0" src="fireflies.png" alt="temporary logo">

</div>

<style lang="postcss">
  .custom-shadow:focus {
    box-shadow: 0 0 10px #FFFF8F, 0 0 15px #FFFF8F, 0 0 20px #FFFF8F, 0 0 25px #FFFF8F;
  }
</style>
