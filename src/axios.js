import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 1000
})