  import axios from "axios";
  const KEY = 'AIzaSyBbWoMo8W2U6cO4jKMbTvF353YpP_2jZ_s';
  
  export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
  });