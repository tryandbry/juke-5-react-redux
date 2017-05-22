import React, { Component } from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';


function mapStateToProps(state, ownProps) {
  function songsToStations(songs) {
    let genres = songs.reduce((_genres, song) => {
      if (Object.keys(_genres).indexOf(song.genre) === -1) _genres[song.genre] = [];
      return _genres
    }, {});

    return songs.reduce((_genres, song) => {
      _genres[song.genre].push(song);
      return _genres;
    }, genres);
  }

  let filteredSongs = state.songs.filter(song => song.genre === ownProps.params.genreName)
  return {
    genreName: ownProps.params.genreName,
    stationSongs: songsToStations(filteredSongs),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)
