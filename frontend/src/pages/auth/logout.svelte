<script>
    import {goto} from "@roxi/routify";
    import {onMount} from "svelte";
    import {auth, toast} from "../../stores";

    onMount(async () => {
        try {
            // Log user out and redirect to homepage
            await auth.logout();
        } catch (error) {
            console.log(error.message);
        } finally {
            auth.init(null);
            $goto('/');
            toast.send("success", "Logout succeeded", "Bye!")
        }
    })
</script>
<h1>Logging you out...</h1>