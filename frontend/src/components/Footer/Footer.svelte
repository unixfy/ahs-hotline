<script>
    import {Column, Grid, Row} from "carbon-components-svelte";
    import FavoriteFilled16 from "carbon-icons-svelte/lib/FavoriteFilled20";
</script>

<footer>
    <Grid>
        <Row>
            <Column>
                <p> &copy; 2021 AHS-Hotline - Built with
                    <FavoriteFilled16/>
                    by Unixfy
                </p>
            </Column>
        </Row>
    </Grid>
</footer>

<style>
    footer {
        padding-top: 1%;
        padding-bottom: 1%;
        background-color: #262626;
        color: white;
    }
</style>