<script>
    import {url} from "@roxi/routify";
    import {onMount} from "svelte";

    onMount(async () => {
        // log user out
        window.location = $url('/');
    })
</script>
<h1>Logging you out...</h1>