<!--
   Navigation component
   Automatically generates menu & sidebar from the routes Routify notices
-->
<script>
    import {url, isActive, layout} from '@roxi/routify'
    import {
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu, SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem,
    } from "carbon-components-svelte";

    export let items = $layout.children

    // Debugging code
    // import { onMount } from 'svelte';
    // onMount(async() => {
    //     await console.log(items)
    // })

    // Pull sideNavOpen from the parent component
    export let sideNavOpen;
</script>

<HeaderNav>
    {#each items as {path, title, children, meta, ...rest}}
        {#if !(meta.hidden)}
            {#if children.length > 0}
                <HeaderNavMenu text="{toTitlecase(title)}">
                    {#each children as {path, title, ...rest}}
                        <HeaderNavItem href="{$url(path)}" isSelected={$isActive(path)} text="{toTitlecase(title)}"/>
                    {/each}
                </HeaderNavMenu>
            {:else}
                <HeaderNavItem href="{$url(path)}" isSelected={$isActive(path)} text="{toTitlecase(title)}"/>
            {/if}
        {/if}
    {/each}
</HeaderNav>

<SideNav bind:isOpen={sideNavOpen}>
    <SideNavItems>
        {#each items as {path, title, children, meta, ...rest}}
            {#if !(meta.hidden)}
                {#if children.length > 0}
                    <SideNavMenu text="{toTitlecase(title)}">
                        {#each children as {path, title, ...rest}}
                            <SideNavMenuItem href="{$url(path)}" isSelected={$isActive(path)}
                                             text="{toTitlecase(title)}"/>
                        {/each}
                    </SideNavMenu>
                {:else}
                    <SideNavLink href="{$url(path)}" isSelected={$isActive(path)} text="{toTitlecase(title)}"/>
                {/if}
            {/if}
        {/each}
    </SideNavItems>
</SideNav>

<style>
</style>
