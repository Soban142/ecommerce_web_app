import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzE0MDYxM2NhYzE1ZGU1ODc0YTc1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODkzMTgxMSwiZXhwIjoxNjk5MTkxMDExfQ.SZkqFtg6jop6v1IEy_TMmKbNxniRNFxtZ4uyQI4KBaI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
