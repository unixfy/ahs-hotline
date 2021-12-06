<script>
    import {PasswordInput, Button, Form, FormGroup, Tile, InlineNotification} from "carbon-components-svelte";
    import {goto, url} from "@roxi/routify";
    import {toast} from "../../stores";

    // User's input
    let authTicket = "";
    // Sets whether the input field is shown invalid
    let ticketValidationFailed = false;
    let ticketValidationFailureText = '';

    let validateTicket = function () {
        if (authTicket === "DEMO1234") {
            toast.send("success", "Existing message found", "Taking you there now!")
            $goto('/message/demo')
        } else if (authTicket === "CREATE123") {
            toast.send("info", "No existing message", "Please send a new one.")
            $goto('/message/new')
        } else {
            ticketValidationFailed = true;
            ticketValidationFailureText = 'This code does not exist.';
        }
    };

</script>

<div class="horiz-center">
    <Tile>
        <h2>Log in with an authentication code</h2>
        <p>You can use this to send a new message or view an old one.</p>

        <hr>

        <InlineNotification kind="info" title="Demo mode" subtitle="Use the code DEMO1234 to see an existing message or CREATE123 to send a new one." hideCloseButton/>
        <Form on:submit={validateTicket}>
            <FormGroup>
                <PasswordInput bind:value={authTicket} placeholder="Enter 8-digit code..." invalid={ticketValidationFailed}
                               labelText="Authentication Code" hidePasswordLabel="Hide code" showPasswordLabel="Show code"
                               invalidText={ticketValidationFailureText} required/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>

    </Tile>
</div>
