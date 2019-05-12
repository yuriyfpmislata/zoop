import React, { useState, useEffect, useContext } from 'react';
import './Artist.scss';
import { withRouter } from 'react-router-dom';

import * as artistsService from '../../services/artists';
import PlayerContext from '../../contexts/PlayerContext';

function Artist({ match: route, history }) {
  const artistId = route.params.artistId;

  const [artist, setArtist] = useState(null);
  const { playSong } = useContext(PlayerContext);

  async function fetchArtist(artistId) {
    setArtist(await artistsService.findById(artistId));
  }

  useEffect(() => {
    fetchArtist(artistId);
  }, [artistId]);

  return (
    <section className="section">
      {
        artist
          ? (
            <div className="Artist">
              <h2 className="title is-4">{artist.name}</h2>
              <div className="Artist__content">
                <img className="Artist__image image" src={artist.image} alt="Artist's avatar" />
                <div className="Artist__albums">
                  {
                    artist.albums.map(album => (
                      <div className="Artist__album card" onClick={() => history.push(`/artist/${artistId}/album/${album._id}`)}>
                        <div className="card-image">
                          <figure className="image">
                            <img src={album.artwork} alt="Album artwork" />
                          </figure>
                        </div>
                        <div className="Artist__albumName card-content has-text-centered">
                          <h3 className="title is-6 has-text-primary">{album.name}</h3>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <section className="Artist__songs section">
                <h3 className="title is-5">All Songs</h3>
                <ul>
                  {
                    artist.songs.map(song => (
                      <div className="Artist__song media card" onClick={() => playSong(song._id)}>
                        <div className="media-content">
                          <h5 className="is-size-5 has-text-primary">{song.name}</h5>
                          <div className="Artist__songGenres">
                            {
                              song.genres.map(genre => <span className="tag is-primary">{genre}</span>)
                            }
                          </div>
                        </div>
                        <div className="media-right">
                          <span className="is-size-4 has-text-primary">▸</span><span className="Song__playCount has-text-primary">{song.playCount}</span>
                        </div>
                      </div>
                    ))
                  }
                </ul>
              </section>
            </div>
          )
          : null
      }
    </section>
  )
}

export default withRouter(Artist);