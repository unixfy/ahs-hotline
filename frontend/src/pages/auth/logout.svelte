<script>
    import {url} from "@roxi/routify";
    import {onMount} from "svelte";
    import {auth} from "../../stores";

    onMount(async () => {
        try {
            // Log user out and redirect to homepage
            await auth.logout();
        } catch(error) {
            console.log(error.message);
        } finally {
            auth.init(null);
            window.location = $url('/');
        }
    })
</script>
<h1>Logging you out...</h1>