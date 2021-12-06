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
    import {auth, toast} from "../../stores";
    import {goto} from "@roxi/routify";

    let email
    let password

    let loading = false;

    let login = async () => {
        try {
            loading = true;
            // Try to log in
            await auth.loginEmailPassword(email, password);

            loading = false;
            // Redirect to my message screen
            $goto('/admin/message/my')
            // Show hello message with user's name
            toast.send("success", "Login succeeded", `Hello, ${$auth.account.name}!`)
        } catch (error) {
            loading = false;
            // console.log(error);
            // Show a toast with the error
            toast.send("error", "Login failed", error.message);
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
        margin: 10%;
    }
</style>