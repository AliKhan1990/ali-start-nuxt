import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://localhost:8008/node/api/index')
}