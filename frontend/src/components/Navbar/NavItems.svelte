<!--
   Navigation component
   Automatically generates menu & sidebar from the routes Routify notices
-->
<script>
    import {url, isActive, layout} from '@roxi/routify'
    import {
        HeaderAction, HeaderActionLink,
        HeaderGlobalAction,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu, HeaderUtilities, SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem,
    } from "carbon-components-svelte";
    import Login20 from "carbon-icons-svelte/lib/Login20";
    import Sun20 from "carbon-icons-svelte/lib/Sun20";

    export let items = $layout.children

    // Debugging code
    // import { onMount } from 'svelte';
    // onMount(async() => {
    //     await console.log(items)
    // })

    // Pull sideNavOpen from the parent component
    export let sideNavOpen;
    // Resolves some annoying warnings when building svelte app
    let toTitlecase = window.toTitlecase;
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


<HeaderUtilities>
    <HeaderActionLink aria-label="Admin Login" icon={Login20} href="{$url('/login')}"/>
    <HeaderGlobalAction aria-label="Dark Mode Toggle" icon={Sun20}/>
<!--    todo: implement localstorage with dark mode-->
</HeaderUtilities>

<style>
</style>
