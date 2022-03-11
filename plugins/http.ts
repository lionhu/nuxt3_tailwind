import { defineNuxtPlugin } from '#app'
import axios from 'axios'

const access_token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Nzc0Mzg1LCJqdGkiOiJhNWI0ZGM1MzIwOTM0ZjFmOGJjOGY2ZDIwNDFlY2NiOCIsInVzZXJfaWQiOjV9.ipO8JRzqAuKYu-OEMLoMv1lsok5kB6Vk37wRhsNuSZg`;
const _timeout=5000
const instance = axios.create({
  baseURL: "https://misawa-pharmacy.nichiei.services/daphne/api",
  headers: {
      "Content-Type": "application/json",
    //   "lionhu":access_token
      "Authorization": access_token
  },
  timeout: _timeout,
});

console.log(instance);
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      http: instance
    }
  }
})