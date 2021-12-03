<script>
    import {Router} from '@roxi/routify'
    import {routes} from '../.routify/routes'
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

</style>
