<script>
    import {
        Button, Checkbox,
        DataTable,
        Toolbar,
        ToolbarBatchActions,
        ToolbarContent, ToolbarSearch
    } from "carbon-components-svelte";

    let headers = [
        {
            key: 'code',
            value: 'Code'
        },
        {
            key: 'used',
            value: 'Used?',
        }
    ]

    let selectedRowIds;

    let authTicketsData = [
        {
            id: 1,
            code: 'LDSM3GMA',
            used: false,
        },
        {
            id: 2,
            code: 'JV4NTSAS',
            used: false,
        },
        {
            id: 3,
            code: 'KJKQ9Y7T',
            used: false,
        },
        {
            id: 4,
            code: 'TP10EXHH',
            used: true,
        },
    ]
</script>

<DataTable
        title="Authentication Codes"
        description="Students can log in with these codes"
        rows={authTicketsData}
        headers={headers}
        batchSelection
        zebra
        stickyHeader
        bind:selectedRowIds>
    <Toolbar>
        <ToolbarBatchActions>
            <Button>Delete</Button>
        </ToolbarBatchActions>
        <ToolbarContent>
            <ToolbarSearch />
            <Button>Create code</Button>
        </ToolbarContent>
    </Toolbar>

    <span slot="cell" let:row let:cell>
        {#if cell.key === 'used'}
            <Checkbox labelText={cell.value} checked={cell.value} hideLabel disabled />
        {:else}
            {cell.value}
        {/if}
    </span>
</DataTable>

<!-- TODO: Editing/creating UI -->