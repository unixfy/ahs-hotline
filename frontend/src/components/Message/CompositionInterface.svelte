<script>
    import {
        Button,
        Dropdown,
        Form,
        FormGroup,
        InlineNotification,
        TextArea,
        TextInput,
        Tile
    } from "carbon-components-svelte";

    // Boolean whether this is a new message or a new response
    export let message;
</script>

<div class="compositioninterface">
    <Tile>
        <Form>
            {#if message}
                <FormGroup>
                    <TextInput labelText="Subject" placeholder="I like ice cream..."
                               helperText="Summarize your message in a sentence." required/>
                </FormGroup>
            {/if}
            <FormGroup>
                <TextArea labelText="Content" placeholder="because..." helperText="Please tell us what you need."
                          required/>
            </FormGroup>
            {#if message}
                <FormGroup>
                    <Dropdown
                            titleText="Category"
                            selectedIndex={0}
                            items={[{ id: '0', text: 'Conversation' }, { id: '1', text: 'Serious' }]}
                            required
                    />
                </FormGroup>
                <FormGroup>
                    <Dropdown
                            titleText="Priority"
                            selectedIndex={0}
                            items={[{ id: '0', text: 'Low' }, { id: '1', text: 'Medium' }, { id: '2', text: 'Emergency' }]}
                            required
                    />
                </FormGroup>
            {/if}
            <Button type="submit">Send</Button>

            {#if message}
                <InlineNotification
                        kind="info"
                        title="Note:"
                        subtitle="Please save your login code so you can access this message later."
                        hideCloseButton
                />
            {/if}
        </Form>
    </Tile>
</div>

<style>
    .compositioninterface {
        margin-top: 2%;
        margin-bottom: 2%;
    }
</style>