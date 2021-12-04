<script>
    import {page, metatags} from '@roxi/routify'

    // Set title and meta tags
    // Note that the title is reactive
    $: metatags.title = `${toTitlecase($page.title)} - AHS-Hotline`

    metatags.description = "A trusted way to reach help at AHS."
</script>