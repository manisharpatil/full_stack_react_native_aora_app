import { Account, Client, ID } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.thedesign.nativeapp',
    projectId: '667efd07001700d097e0',
    databaseId: '667effbe001c85620820',
    userCollectionId: '667effea00385d45b186',
    videoCollectionId: '667f004a00077515cb73',
    storageId: '667f02cc001a3f159e85'
}

// Init your React Native SDK from https://github.com/appwrite/sdk-for-react-native
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
export const createuser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
 }

