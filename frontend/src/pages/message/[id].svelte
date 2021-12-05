<script>
    import PageHeader from "../../components/PageHeader/PageHeader.svelte";
    import MessageDisplay from "../../components/Message/MessageDisplay.svelte";

    export let id;
</script>

<PageHeader title="View message: {id}" subtitle="Last updated: TIME by USER"/>

<MessageDisplay id={id} />

<!-- routify:options title="View Message" -->