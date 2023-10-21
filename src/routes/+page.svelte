<script lang="ts">
  export let data: any;
</script>

<h1 class="h-screen w-screen text-3xl font-bold underline flex justify-center items-center">
  {data.stats.sources}
</h1>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>