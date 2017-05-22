import React from 'react';
import Songs from './Songs';

export default function Station (props) {
  console.log('props!!!!!!!!!! ', props);
  return (
    <div>
      <h3>{ props.genreName } Station</h3>
      <Songs 
        songs={props.stationSongs[props.genreName]} 
        currentSong={props.currentSong} 
        isPlaying={props.isPlaying} 
        toggleOne={props.toggle}
      />
    </div>
  );
}
