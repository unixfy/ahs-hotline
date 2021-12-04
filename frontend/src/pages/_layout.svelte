<script>
  import NavBar from '../components/Navbar/NavBar.svelte'

  import {
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  import "carbon-components-svelte/css/all.css";
  import Footer from "../components/Footer/Footer.svelte";
  import Title from "../components/Navbar/Title.svelte";
  let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"

  $: document.documentElement.setAttribute("theme", theme);


</script>
<Title />

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

<!-- Push footer to bottom (see App.svelte) -->
<div class="spacer"></div>

<Footer />

<style>

</style>
