<script>
    import {Button, FluidForm, PasswordInput, TextInput, Tile} from "carbon-components-svelte";
</script>

<div class="userauthbox horiz-center">
    <div class="userauthbox-content">
        <Tile>
            <div class="loginform">
                <FluidForm>
                    <div style="padding-bottom: 10%;">
                        <h2>Please sign in</h2>
                    </div>
                    <TextInput labelText="Email address" placeholder="Enter email address..." required type="email"/>
                    <PasswordInput
                            required
                            type="password"
                            labelText="Password"
                            placeholder="Enter password..."
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