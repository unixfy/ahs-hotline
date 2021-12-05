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

    export let title;
    export let description;
    export let type;

    let taxonomiesDataDecider = () => {
        if (type === 'statuses') {
            return [
                {
                    id: 1,
                    name: 'Open',
                    color: '#00FF00',
                }
            ]
        } else if (type === 'priorities') {
            return [
                {
                    id: 1,
                    name: 'Emergency',
                    color: '#FF0000',
                }
            ]

        } else if (type === 'categories') {
            return [
                {
                    id: 1,
                    name: 'Conversation',
                    color: '#00FFFF'
                }
            ]
        }
    }

    $: taxonomiesData = taxonomiesDataDecider()
</script>

<DataTable
        title={title}
        description={description}
        rows={taxonomiesData}
        headers={headers}
        >
    <span slot="cell" let:row let:cell>
        {#if cell.key === 'color'}
            {cell.value}
            <span style="background-color:{cell.value}; padding: 10px; margin-left: 5px;"></span>
        {:else}
            {cell.value}
        {/if}
    </span>
</DataTable>