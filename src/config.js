export default {
    apiGateway: {
        URL: "https://oo3pxolaz1.execute-api.eu-west-2.amazonaws.com/prod",
        REGION: "eu-west-2"
    },
    cognito: {
        APP_CLIENT_ID: "3drq7ih6pt89l467asph0ts2bt",
        IDENTITY_POOL_ID: "eu-west-2:cfb43e0a-f8fe-4397-9f91-45fd912dd6b8",
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_IOEbDlJq6"
    },
    validation: {
        newWineProducer: {
            NAME_MIN_LENGTH: 3
        }
    }
};
