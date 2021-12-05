<script>
    import PageHeader from "../../components/PageHeader/PageHeader.svelte";
    import DisplayMessage from "../../components/Message/DisplayMessage.svelte";

    export let id;
</script>

<PageHeader title="View message: {id}" subtitle="Last updated: TIME by USER"/>

<DisplayMessage id={id} />

<!-- routify:options title="View Message" -->