import axios from 'axios';
import { Buffer } from 'buffer';

const api = axios.create({
    baseURL: 'http://php74dev.com/wordpress/wp-json/wc/v3'
});
const username = 'ck_9fff32c8a7bd49b07bea00442470faa654ced9c6';
const password = 'cs_0069cd0ff5d6264e11aed5c909ccc3d09bea6143';

const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64')
// Buffer.from(token).toString('base64');
// Where you would set stuff like your 'Authorization' header, etc ...
api.defaults.headers =  { 'Authorization': 'Basic '+ encodedToken };

export default api; 