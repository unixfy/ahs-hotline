<script>
    import {Router} from '@roxi/routify'
    import {routes} from '../.routify/routes'
    import {onMount} from "svelte";
    import {appwrite} from "./appwrite";
    import {auth} from "./stores";

    window.toTitlecase = function (str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    // As soon as the page is loaded, try to grab the authentication session
    onMount(async () => {
            try {
                const account = await appwrite.account.get();
                auth.init(account);
            } catch (error) {
                auth.init(null);
            }
    })
</script>

<Router {routes}/>

<style global>
    :global(hr) {
        margin-top: 2em;
        margin-bottom: 2em;
    }

    /* Push footer to bottom */
    :global(#routify-app) {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    :global(.spacer) {
        flex: 1;
    }

    :global(.horiz-center-text) {
        text-align: center;
    }

    :global(.horiz-center) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    :global(.spaced) {
        padding-bottom: 3%;
    }
</style>
