import httpClient from "./http-common";

const fetchMessages = () => {
    return httpClient.get("/api/messages");
};

const countRecords = () => {
    return httpClient.get("/api/messages/count");
};

const addMessage = (messageData) => {
    return httpClient.post("/api/messages", messageData);
};

export default {fetchMessages, addMessage, countRecords};
