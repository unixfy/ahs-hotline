<script>
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
</script>

<Router {routes} />

<style global>
    :global(hr) {
        margin-top: 2em;
        margin-bottom: 2em;
    }
</style>
