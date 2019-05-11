import React, { useContext } from 'react';
import './Player.scss';
import PlayerContext from '../../contexts/PlayerContext';

function Player() {
  const { song } = useContext(PlayerContext);

  return (
    song
      ? (
        <div className="Player has-text-white">
          <div className="Player__artwork">
            <img className="image is-96x96" src={song.album.artwork} alt="Album's artwork" />
          </div>
          <div className="Player__songInfo">
            <h5 className="is-size-5">{song.name}</h5>
            <h6 className="is-size-6">{song.artist.name}</h6>
          </div>
          <div className="Player__audioContainer">
            <audio className="Player__audioElement" src={song.url} controls autoPlay />
          </div>
        </div>
      )
      : null
  );
}

export default Player;