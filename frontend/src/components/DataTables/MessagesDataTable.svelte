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
        // {
        //     key: 'category',
        //     value: 'Category'
        // },
        // {
        //     key: 'priority',
        //     value: 'Priority'
        // },
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
        expandable
>
    <Toolbar>
        <ToolbarContent>
            <ToolbarSearch/>
        </ToolbarContent>
    </Toolbar>

    <span slot="cell" let:row let:cell>
        {#if cell.key === 'link'}
            <a href={$url('/message/id')}>Click here</a>
        {:else}
            {cell.value}
        {/if}
    </span>

    <span slot="expanded-row" let:row>
        <div class="expanded-row">
            <strong>Category</strong>: {row.category}
            <br>
            <strong>Priority</strong>: {row.priority}

            <hr/>

        <p>Message goes here</p>
        </div>
    </span>
</DataTable>

<style>
    .expanded-row {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>