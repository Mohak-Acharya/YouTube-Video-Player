import axios from 'axios';
const KEY = 'AIzaSyAEaGB6uEVY_tMJSPVvdNfoKnCXtNac5cw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
