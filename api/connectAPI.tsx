import axios from "axios";
export default axios.create({
        baseURL: 'https://654ca6b977200d6ba8592837.mockapi.io',
      headers:{
        Authorization:'Bearer API_KEY'
      }
})