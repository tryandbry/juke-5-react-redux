import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';

function mapStateToProps(state){
  console.log("mapStateToProps state:",state);
  function songsToStations(songs){
    let genres = songs.reduce( (_genres,song)=>{
      if(Object.keys(_genres).indexOf(song.genre) === -1) _genres[song.genre]=[];
      return _genres
    },{});

    return songs.reduce( (_genres,song)=>{
      _genres[song.genre].push(song);
      return _genres;
    },genres);
  }
  
  
  return {stations: songsToStations(state.songs)}
}

function mapDispatchToProps(dispatch){
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Stations)
