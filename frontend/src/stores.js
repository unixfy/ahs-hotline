import {derived, writable} from 'svelte/store';
import {appwrite} from "./appwrite";

// TODO: If user is authenticated admin
// export const isAuthenticatedAdmin = derived(false,
//
// );

// Handle auth status
const createAuth = () => {
    const {subscribe, set, update} = writable({
        account: null,
    });

    return {
        subscribe,
        // Function to create account
        signup: async (email, password, name) => {
            return await appwrite.account.create(email, password, name);
        },
        // Function to create email/password session
        loginEmailPassword: async (email, password) => {
            await appwrite.account.createSession(email, password);
            const user = await appwrite.account.get();
            auth.init(user);
        },
        // Function to create anonymous session
        loginAnonymous: async() => {
            await appwrite.account.createAnonymousSession();
            const user = await appwrite.account.get();
            auth.init(user);
        },
        // Function to invalidate the session only
        logout: async () => {
            await appwrite.account.deleteSession("current");
        },
        // alert: async (alert: Alert) =>
        //     update((n) => {
        //         n.alert = alert;
        //         return n;
        //     }),
        // Function to save the account object to our store
        init: async (account = null) => {
            return set({account});
        },
    };
};

export const auth = createAuth();
