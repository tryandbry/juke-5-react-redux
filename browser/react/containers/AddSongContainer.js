import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux'

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
      }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadSong();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  render() {
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.props.handleSubmit.bind(this)}/>
    );
  }
}

function mapStateToProps (state) {
  const playlistId = state.playlists.selected.id;
  return {songs: state.songs, playlistId};
}

function mapDispatchToProps (dispatch) {

   function handleSubmit(evt) {
    evt.preventDefault();

    const playlistId = this.props.playlistId;
    const songId = this.state.songId;
    dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));
  }

  function loadSong() {
    dispatch(loadAllSongs());
  }

  return {handleSubmit, loadSong};
}

export default connect(mapStateToProps,mapDispatchToProps)(AddSongContainer);
