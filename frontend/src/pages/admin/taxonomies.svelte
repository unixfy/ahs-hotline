<script>
    import TaxonomiesDataTable from "../../components/TaxonomiesDataTable/TaxonomiesDataTable.svelte";
    import PageHeader from "../../components/PageHeader/PageHeader.svelte";

    let statusData = [
        {
            name: 'test',
            color: 'test2',
        }
    ]
</script>

<h1>Taxonomies</h1>
<hr>
<div class="spaced">
    <TaxonomiesDataTable title="Statuses" description="The statuses a message can take" data={statusData}/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Priorities" description="The priorities a message can take" data={statusData}/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Categories" description="The categories a message can have" data={statusData}/>
</div>
