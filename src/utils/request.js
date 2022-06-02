import axios from 'axios'

const request = axios.create({
    baseURL:'https://qq.com',
    timeout:3000,
})

export default request