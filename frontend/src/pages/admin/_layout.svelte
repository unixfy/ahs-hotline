<script>
    import {url} from '@roxi/routify'
    import {ClickableTile, Column, Row} from "carbon-components-svelte";
</script>

<Row>
    <Column md={4} sm={4} lg={4}>
        <h2 style="padding-bottom: 30px;">Admin Area</h2>
        <ClickableTile href="{$url('/admin/auth-tickets')}">
            Authentication Tickets
        </ClickableTile>
        <ClickableTile href="{$url('/admin/messages')}">
            All Messages
        </ClickableTile>
        <ClickableTile href="{$url('/admin/my-messages')}">
            My Messages
        </ClickableTile>
        <ClickableTile href="{$url('/admin/taxonomies')}">
            Taxonomies
        </ClickableTile>
        <ClickableTile href="{$url('/admin/logout')}">
            Logout
        </ClickableTile>
    </Column>
    <Column md={12} sm={12} lg={12}>
        <slot></slot>
    </Column>
</Row>
<!-- routify:options hidden -->

