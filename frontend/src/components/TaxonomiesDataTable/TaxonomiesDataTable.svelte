<script>
    import {DataTable} from "carbon-components-svelte";

    let headers = [
        {
            key: 'name',
            value: 'Name'
        },
        {
            key: 'color',
            value: 'Color',
        }
    ]

    let selectedRowIds;

    export let data;
    export let title;
    export let description;
</script>

<DataTable
        title={title}
        description={description}
        rows={data}
        headers={headers}
        bind:selectedRowIds>
    <span slot="cell" let:row let:cell>
        {#if cell.key === 'color'}
            {cell.value}
            <span style="background-color:{cell.value}; padding: 10px; margin-left: 5px;"></span>
        {:else}
            {cell.value}
        {/if}
    </span>
</DataTable>

<!-- TODO: Editing/creating UI -->
<!-- TODO: Toolbar to create stuff -->