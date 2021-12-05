<script>
    import {Button, ButtonSet, Tile} from "carbon-components-svelte";
</script>

<div class="displaymessage">
    <Tile>
        <h3><strong>Subject: </strong> Test</h3>
        <h4>Created on <strong>12/04/2021</strong> by <strong>abcd1234</strong></h4>
        <hr>

        <p>
            According to all known laws
            of aviation,


            there is no way a bee
            should be able to fly.


            Its wings are too small to get
            its fat little body off the ground.


            The bee, of course, flies anyway


            because bees don't care
            what humans think is impossible.


            Yellow, black. Yellow, black.
            Yellow, black. Yellow, black.


            Ooh, black and yellow!
            Let's shake it up a little.


            Barry! Breakfast is ready!


            Ooming!


            Hang on a second.
        </p>

    </Tile>
</div>

<div class="displaymessage">
    <Tile light style="border: 1px solid blue;">
        <h4>Response on <strong>12/04/2021</strong> by <strong>Alex</strong></h4>
        <hr>

        <p>
            Wow this is so funny
        </p>
    </Tile>
</div>

<div class="displaymessage">
    <Tile light style="border: 1px solid blue;">
        <h4>Response on <strong>12/05/2021</strong> by <strong>John</strong></h4>

        <hr>

        <p>
            Yes
        </p>
    </Tile>
</div>

<ButtonSet>
    <Button size="lg">Reply</Button>
    <Button kind="secondary" size="lg">Lock message</Button>
</ButtonSet>

<style>
    .displaymessage {
        margin-top: 2%;
        margin-bottom: 2%;
    }
</style>