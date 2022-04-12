import { defineNuxtPlugin } from '#app'
import axios from 'axios'

const access_token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwNjM1MjM4LCJqdGkiOiI0YzMzNjBjY2YyZDM0NmQzYjI4ODNlZTdkNTk4NTc5OSIsInVzZXJfaWQiOjF9.HtmwGcJtCL9JS4LOobEGY76nds8iD9x-m8c7xD2zY3o`
const _timeout = 5000
const instance = axios.create({
  baseURL: 'https://misawa-pharmacy.nichiei.services/daphne/api',
  headers: {
    'Content-Type': 'application/json',
    //   "lionhu":access_token
    Authorization: access_token
  },
  timeout: _timeout
})

console.log('http instance:', instance)

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      http: instance
    }
  }
})
