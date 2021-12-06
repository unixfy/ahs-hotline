<script>
    import {PasswordInput, Button, Form, FormGroup, Tile} from "carbon-components-svelte";
    import {url} from "@roxi/routify";

    // User's input
    let authTicket = "";
    // Sets whether the input field is shown invalid
    let ticketValidationFailed = false;
    let ticketValidationFailureText = '';

    let validateTicket = function () {
        ticketValidationFailed = true;
        ticketValidationFailureText = 'This code does not exist.';
    };

</script>

<div class="horiz-center">
    <Tile>
        <h2>Log in with an authentication code</h2>
        <p>You can use this to send a new message or view an old one.</p>

        <hr>

        <Form on:submit={validateTicket}>
            <FormGroup>
                <PasswordInput bind:value={authTicket} placeholder="Enter 8-digit code..." invalid={ticketValidationFailed}
                               labelText="Authentication Code" hidePasswordLabel="Hide code" showPasswordLabel="Show code"
                               invalidText={ticketValidationFailureText} required/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>

        <a href={$url('/message/new')}>Send new message ui</a>
        <a href={$url('/message/1234')}>View existing message ui</a>
    </Tile>
</div>
