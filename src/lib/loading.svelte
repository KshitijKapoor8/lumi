<script lang = "ts">
    import { loading } from "$lib/loading";
    import { Jumper } from 'svelte-loading-spinners';
</script>

{#if $loading}
    <div>
        <Jumper size="90" color="#FDFD96" unit="px"/>
    </div>
{/if}

<style>
    div{
        padding-left: 180%;
        padding-top: 100%;
    }
</style>