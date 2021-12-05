<script>
    import {
        DataTable,
        Toolbar,
        ToolbarContent,
        ToolbarSearch
    } from "carbon-components-svelte";
    import {url} from "@roxi/routify";

    let headers = [
        {
            key: 'subject',
            value: 'Subject'
        },
        {
            key: 'status',
            value: 'Status',
        },
        {
            key: 'category',
            value: 'Category'
        },
        {
            key: 'priority',
            value: 'Priority'
        },
        {
            key: 'assignee',
            value: 'Assigned to'
        },
        {
            key: 'link',
            value: 'Link'
        },
    ]

    let messagesData = [
        {
            id: 1,
            subject: 'Hello',
            status: 'Open',
            category: 'Conversation',
            priority: 'Low',
            assignee: 'John Doe'
        }
    ]

    export let all;
</script>

<DataTable
        title="Messages"
        description="{all ? 'These are all messages in the system you may see.' : 'These are the messages assigned to you.'}"
        rows={messagesData}
        headers={headers}
        zebra
        stickyHeader
        >
    <Toolbar>
        <ToolbarContent>
            <ToolbarSearch />
        </ToolbarContent>
    </Toolbar>

    <span slot="cell" let:row let:cell>
        {#if cell.key === 'link'}
            <a href={$url('/message/id')}>Click here</a>
        {:else}
            {cell.value}
        {/if}
    </span>
</DataTable>