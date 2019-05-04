import axios from 'axios';

const API = `${process.env.REACT_APP_ZOOP_API_URL}/graphql`;

async function findAll() {
  const query = `
    {
      artists {
        _id
        name
        image
      }
    }
  `;

  const { data: { data: { artists } } } = await axios.post(API, { query });

  return artists;
}

async function findRandom(limit = 5) {
  const query = `
    {
      artists(random: true, limit: ${ limit}) {
        _id
        name
        image
      }
    }
  `;

  const { data: { data: { artists } } } = await axios.post(API, { query });

  return artists;
}

export {
  findAll,
  findRandom
}