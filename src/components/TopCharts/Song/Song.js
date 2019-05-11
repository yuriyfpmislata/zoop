import React, { useContext } from 'react';
import './Song.scss';
import PlayerContext from '../../../contexts/PlayerContext';

function Song({ song }) {
  const { playSong } = useContext(PlayerContext);

  return (
    <div className="Song media card" onClick={() => playSong(song._id)}>
      <div className="Song__artworkContainer media-left">
        <img className="image is-96x96" src={song.album.artwork} alt="Album's artwork" />
        <div className="Song__artworkOverlay has-text-grey-lighter">▸</div>
      </div>
      <div className="media-content">
        <h5 className="is-size-5 has-text-primary">{song.name}</h5>
        <h6 className="is-size-6">{song.artist.name}</h6>
      </div>
      <div className="media-right">
        {song.playCount}
      </div>
    </div>
  );
}

export default Song;