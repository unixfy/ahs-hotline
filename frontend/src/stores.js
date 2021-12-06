import {writable} from 'svelte/store';
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
        loginAnonymous: async () => {
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

// Handle toasts queue
// Thanks to https://codechips.me/building-notification-center-with-svelte-stores/
const createToast = () => {
    const {subscribe, set, update} = writable({
        queue: [],
    });

    // Function to clear all messages from the queue
    const clear = () => {
        set({queue: []})
    }

    // Function to dismiss a message with title "title"
    const dismiss = (title) => {
        update(({queue}) => ({queue: queue.filter(queue => queue.title !== title)}))
    }

    // Function to send a new message, taking a type (defined by ibm carbon components), title, and message
    const send = (type, title, message) => {
        // this appends our new message to the END of the queue
        update(({queue}) =>
            ({
                queue:
                    [...queue, {
                        type: type,
                        title: title,
                        message: message
                    }]
            }));

        // then remove it after 2s
        setTimeout(() => {
            dismiss(title)
        }, 3000)
    }

    return {
        subscribe,
        clear,
        dismiss,
        send,
        init: set,
    }
}

export const auth = createAuth();
export const toast = createToast();
