import axios from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  proxy: false,
  httpsAgent: new HttpsProxyAgent(
    'http://wendels:GeoNoah%400103@10.50.0.49:3128',
  ),
})
