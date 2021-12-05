<script>
    import TaxonomiesDataTable from "../../components/TaxonomiesDataTable/TaxonomiesDataTable.svelte";
    import PageHeader from "../../components/PageHeader/PageHeader.svelte";

    let statusData = [
        {
            id: 1,
            name: 'Open',
            color: '#00FF00',
        }
    ]

    let prioritiesData = [
        {
            id: 1,
            name: 'Emergency',
            color: '#FF0000',
        }
    ]

    let categoriesData = [
        {
            id: 1,
            name: 'Conversation',
            color: '#00FFFF'
        }
    ]
</script>

<h1>Taxonomies</h1>

<hr>

<div class="spaced">
    <TaxonomiesDataTable title="Statuses" description="The statuses a message can take" data={statusData}/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Priorities" description="The priorities a message can take" data={prioritiesData}/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Categories" description="The categories a message can have" data={categoriesData}/>
</div>
