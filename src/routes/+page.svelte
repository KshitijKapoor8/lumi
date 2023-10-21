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
          <input type="search" id="default-search" class= "hover:bg-slate-600 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Lumi..." required>
          <button type="submit"> </button>
    </form>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>