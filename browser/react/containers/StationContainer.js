import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';

function mapStateToProps(state,ownProps){
  console.log("StationContainer mapStateToProps state:",state,ownProps);
  
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

export default connect(mapStateToProps,mapDispatchToProps)(Station)
