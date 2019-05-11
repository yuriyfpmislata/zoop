import React from 'react';
import './TopCharts.scss';
import Song from './Song/Song';

function TopCharts({ songs }) {
  return (
    <div className="TopCharts">
      {
        songs.length > 0
          ? songs.map(song => <Song key={song._id} song={song} />)
          : <progress className="progress is-small is-primary" max="100"></progress>
      }
    </div>
  );
}

export default TopCharts;