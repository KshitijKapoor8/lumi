<script lang = "ts">
  import { navigating } from "$app/stores";
  import { loading } from "$lib/loading";
  import "../app.css";


  $: $loading = !!$navigating
</script>

{$loading}
<slot />