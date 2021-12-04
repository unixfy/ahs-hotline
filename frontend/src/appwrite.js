import {Appwrite} from "appwrite";

const appwrite = new Appwrite();

// Initialize the Appwrite web SDK
appwrite
    .setEndpoint('https://appwrite.unixfy.net/v1') // Your Appwrite Endpoint
    .setProject('61a8fd7288178') // Your project ID
;

// Export it for other modules to use :)
export {appwrite}