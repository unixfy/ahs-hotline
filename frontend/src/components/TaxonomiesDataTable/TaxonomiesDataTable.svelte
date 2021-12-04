<script>
    import {DataTable} from "carbon-components-svelte";

    let headers = [
        {
            key: 'name',
            value: 'Name'
        },
        {
            key: 'color',
            value: 'Color'
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
        zebra
        batchSelection
        bind:selectedRowIds
/>

<!-- TODO: Editing/creating UI -->
<!-- TODO: Toolbar to create stuff -->