<script>
    import {ToastNotification} from "carbon-components-svelte";
    import {toast} from "../../stores";
</script>

{#each $toast.queue as toast}
    <ToastNotification
            kind={toast.type}
            title={toast.title}
            subtitle={toast.message}
            caption={new Date().toLocaleString()}
    />
{/each}