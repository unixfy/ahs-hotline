<script>
    import {
        Button,
        FluidForm,
        InlineNotification,
        Loading,
        PasswordInput,
        TextInput,
        Tile
    } from "carbon-components-svelte";
    import {auth} from "../../stores";
    import {goto} from "@roxi/routify";

    let email
    let password

    let loginValidationFailed = false;
    let loginValidationFailedMessage = '';

    let loading = false;

    let login = async () => {
        try {
            loginValidationFailed = false;
            loginValidationFailedMessage = '';

            loading = true;
            // Try to log in
            await auth.loginEmailPassword(email, password);

            loading = false;
            // Redirect to my message screen
            $goto('/admin/message/my')
        } catch (error) {
            loading = false;
            console.log(error);
            loginValidationFailed = true;
            loginValidationFailedMessage = error.message;
        }
    }
</script>

{#if loading}
    <Loading/>
{/if}

<div class="userauthbox horiz-center">
    <div class="userauthbox-content">
        <Tile>
            <div class="loginform">
                <FluidForm on:submit={login}>
                    <div style="padding-bottom: 10%;">
                        <h2>Please sign in</h2>
                    </div>
                    <!--                    Show error if login failed -->
                    {#if loginValidationFailed}
                        <InlineNotification
                                title="Error:"
                                subtitle={loginValidationFailedMessage}
                                hideCloseButton
                        />
                    {/if}
                    <TextInput labelText="Email address" placeholder="Enter email address..." required type="email"
                               bind:value={email}/>
                    <PasswordInput
                            required
                            type="password"
                            labelText="Password"
                            placeholder="Enter password..."
                            bind:value={password}
                    />
                    <Button type="submit" style="margin-top: 10%">Sign in</Button>
                </FluidForm>
            </div>
        </Tile>
    </div>
</div>

<style>
    .userauthbox {
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .userauthbox-content {
        width: 100%;
        max-width: 500px;
    }

    .loginform {
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
        margin-bottom: 10%;
    }
</style>