import axios from 'axios'

export let base

base = ''

export default axios.create({
  baseURL: base,
  withCredentials: true,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
})
