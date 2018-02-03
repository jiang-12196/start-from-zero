// import fetch from 'node-fetch';

export const fetchGithub = (name) => {
    return fetch(`http://github.com/${name}`)
  };
  
  export default {
    fetchGithub
  };