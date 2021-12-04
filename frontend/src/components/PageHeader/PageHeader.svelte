<script>
    import {Tile} from "carbon-components-svelte";

    export let title;
    export let subtitle;
</script>

<Tile>
    <div class="pageheader">
        <h1>{title}</h1>
        <div class="separator"></div>
        <p><b>{subtitle}</b></p>
    </div>
</Tile>

<style>
    .pageheader {
        padding: 2%;
    }
    .separator {
        margin-bottom: 15px;
    }
</style>