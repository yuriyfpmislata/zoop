import axios from 'axios';

const API = `${process.env.REACT_APP_ZOOP_API_URL}/graphql`;

async function findById(id) {
  const query = `
    {
      album(id: "${id}") {
        _id
        name
        artwork
        songs {
          _id
          name
          playCount
          url
          genres
        }
      }
    }
  `;

  const { data: { data: { album } } } = await axios.post(API, { query });

  return album;
}
export {
  findById
}