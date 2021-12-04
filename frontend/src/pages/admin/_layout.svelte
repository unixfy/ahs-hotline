<script>
    import {url} from '@roxi/routify'
    import {ClickableTile, Column, InlineNotification, Row} from "carbon-components-svelte";
    import {auth} from "../../stores";
</script>

{#if $auth.account}
    <Row>
        <Column md={4} sm={4} lg={4}>
            <h2 style="padding-bottom: 30px;">Admin Area</h2>
            <ClickableTile href="{$url('/admin/auth-tickets')}">
                Authentication Tickets
            </ClickableTile>
            <ClickableTile href="{$url('/admin/message/all')}">
                All Messages
            </ClickableTile>
            <ClickableTile href="{$url('/admin/message/my')}">
                My Messages
            </ClickableTile>
            <ClickableTile href="{$url('/admin/taxonomies')}">
                Taxonomies
            </ClickableTile>
            <ClickableTile href="{$url('/auth/logout')}">
                Logout
            </ClickableTile>
        </Column>
        <Column md={12} sm={12} lg={12}>
            <slot></slot>
        </Column>
    </Row>
{:else}
    <h1>Oops!</h1>
    <InlineNotification title="Unauthorized" subtitle="You aren't allowed to access this page!" hideCloseButton
                        kind="error"/>
{/if}
<!-- routify:options hidden -->

