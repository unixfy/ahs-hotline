<script>
  import NavBar from '../components/Navbar/NavBar.svelte'

  import {
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  import "carbon-components-svelte/css/all.css";
  let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"

  $: document.documentElement.setAttribute("theme", theme);


</script>

<header />

<NavBar />

<Content>
  <Grid>
    <Row>
      <Column>
        <slot></slot>
      </Column>
    </Row>
  </Grid>
</Content>

<footer />

<style>

</style>
