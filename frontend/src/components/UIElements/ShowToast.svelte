<script>
    import {ToastNotification} from "carbon-components-svelte";
    import {toast} from "../../stores";
    import {scale} from "svelte/transition"
</script>

{#each $toast.queue as toast}
    <div transition:scale>
        <ToastNotification
                kind={toast.type}
                title={toast.title}
                subtitle={toast.message}
                caption={new Date().toLocaleString()}
                hideCloseButton
        />
    </div>

{/each}