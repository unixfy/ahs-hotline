<script>
    import Navigation from './NavItems.svelte'

    import {
        Header,
        SkipToContent,
    } from "carbon-components-svelte";

    let sideNavOpen = false;
</script>

<Header company="AHS" platformName="Hotline" bind:isSideNavOpen={sideNavOpen} expandedByDefault={false} href="/">
    <div slot="skip-to-content">
        <SkipToContent/>
    </div>

    <Navigation sideNavOpen={sideNavOpen}/>
</Header>
