import axios from 'axios';

const API = `${process.env.REACT_APP_ZOOP_API_URL}/graphql`;

async function findById(id) {
  const query = `
    {
      song(id: "${id}") {
        _id
        name
        playCount
        url
        genres
        artist {
          _id
          name
        }
        album {
          _id
          name
          artwork
        }
      }
    }
  `;

  const { data: { data: { song } } } = await axios.post(API, { query });

  return song;
}

async function findAll() {
  const query = `
    {
      songs {
        _id
        name
        image
      }
    }
  `;

  const { data: { data: { songs } } } = await axios.post(API, { query });

  return songs;
}

async function findTopCharts(limit = 10) {
  const query = `
  {
    topPlayedSongs(limit: 10) {
      _id
      name
      playCount
      url
      artist {
        _id
        name
      }
      album {
        _id
        name
        artwork
      }
    }
  }
  `;

  const { data: { data: { topPlayedSongs } } } = await axios.post(API, { query });

  return topPlayedSongs;
}



export {
  findAll,
  findTopCharts,
  findById
}