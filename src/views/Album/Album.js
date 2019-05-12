import React, { useState, useContext, useEffect } from 'react';
import './Album.scss';

import PlayerContext from '../../contexts/PlayerContext';
import * as albumsService from '../../services/albums';


function Album({ match: route }) {
  const albumId = route.params.albumId;

  const [album, setAlbum] = useState(null);
  const { playSong } = useContext(PlayerContext);

  async function fetchAlbum(albumId) {
    setAlbum(await albumsService.findById(albumId));
  }

  useEffect(() => {
    fetchAlbum(albumId);
  }, [albumId]);

  return (
    <section className="section">
      {
        album
          ? (
            <div className="Album">
              <h2 className="title is-4">{album.name}</h2>
              <div className="Album__content">
                <img className="Album__image image" src={album.artwork} alt="Album's artwork" />
                <ul>
                  {
                    album.songs.map(song => (
                      <div className="Album__song media card" onClick={() => playSong(song._id)}>
                        <div className="media-content">
                          <h5 className="is-size-5 has-text-primary">{song.name}</h5>
                          <div className="Album__songGenres">
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
              </div>
            </div>
          )
          : null
      }
    </section>
  )
}

export default Album;