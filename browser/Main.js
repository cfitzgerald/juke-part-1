import React, { Component } from 'react';
import Sidebar from './react/Sidebar';
import Footer from './react/Footer';
// import fakeAlbums from './fakeAlbum';
import Albums from './react/Albums';
import SingleAlbum from './react/SingleAlbum';
import axios from 'axios';

const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);

axios.get('api/albums')
  .then(toJson)
  .then(log)
  .catch(logError);

class Main extends Component {
  constructor(props){
    super(props);
    // console.log('constructor(props)', props);
    this.state = {
      albums: [],
      selectedAlbum: {},
      // isToggleOn: false
    };
    this.showAllAlbums = this.showAllAlbums.bind(this);
    this.showSingleAlbum = this.showSingleAlbum.bind(this);
  }

  componentDidMount() {
    // console.log('mounted');
    axios.get('/api/albums')
      .then(results => {
        // console.log('results', results);
        this.setState({ albums: results.data });
      });
  }

  // handleClick(albumId) {
  //   // console.log('E', albumId)
  //   axios.get(`/api/albums/${ albumId }`)
  //     .then(result => {
  //       this.setState({ selectedAlbum: result.data }, function() {
  //         // console.log('state', this.state.selectedAlbum)
  //       })
  //     })
    // console.log(this.state.isToggleOn, 'TOGGLE')
    // this.state.isToggleOn = !this.state.isToggleOn
    // console.log(this.state.isToggleOn, 'TOGGLE')
  // }

  showAllAlbums() {
    this.setState({ selectedAlbum: {} });
  }

  showSingleAlbum(album){
     axios.get(`/api/albums/${ album.id }`)
      .then(result => {
        console.log('showSingleAlbum(album) result = ', result);
        this.setState({ selectedAlbum: result.data });//, () => {
          // console.log('state', this.state.selectedAlbum);
        // });
      });
  }

  render() {
    // console.log('render() this = ', this);
    const { albums, selectedAlbum } = this.state;
    const { showAllAlbums, showSingleAlbum } = this;
    console.log('albums = ', albums);

    // const albumsList = albums.map(album => {
    //   return <Albums key={ album.id } showSingleAlbum={ showSingleAlbum } album={ album } />
    // });
    // console.log('albumsList = ', albumsList);

    return (
      <div id="main" className="container-fluid">

        <Sidebar />

        <div className="col-xs-2"></div>

        <div className="col-xs-10">
          { selectedAlbum.id ? (
            <SingleAlbum showAllAlbums={ showAllAlbums } album={ album } />
          ) : (
            // <Albums key={ album.id } showSingleAlbum={ showSingleAlbum } album={ album } />
            albums.map(album => {
              <Albums key={ album.id } showSingleAlbum={ showSingleAlbum } album={ album } />
            )}
          )}
        </div>

        <Footer />

      </div>
    );
  }
}

export default Main;
