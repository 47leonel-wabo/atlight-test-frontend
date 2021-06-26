import axios from "axios";

export default axios.create({
    baseURL: "https://atlight-java-backend.herokuapp.com",
    // baseURL: "http://localhost:5000", // local
    headers: {
        "Content-Type": "application/json",
    },
});
