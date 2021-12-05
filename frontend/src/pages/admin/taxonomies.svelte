<script>
    import TaxonomiesDataTable from "../../components/DataTables/TaxonomiesDataTable.svelte";
</script>

<h1>Taxonomies</h1>

<hr>

<div class="spaced">
    <TaxonomiesDataTable title="Statuses" description="The statuses a message can take" type="statuses"/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Priorities" description="The priorities a message can take" type="priorities"/>
</div>

<div class="spaced">
    <TaxonomiesDataTable title="Categories" description="The categories a message can have" type="categories"/>
</div>
