import React, { Component } from 'react';

class Albums extends Component {
  render() {
    console.log('Albums render() props', this);
    return (
      <div className="col-xs-4">
        <a onClick={ () => this.props.showSingleAlbum(this.props.album) } className="thumbnail" href="#">
          <img src={ this.props.album.imageUrl } />
          <div className="caption">
            <h5>
              <span>{ this.props.album.name }</span>
            </h5>
            <small>{ this.props.album.songs.length } songs</small>
          </div>
        </a>
      </div>
    );
  }
}

export default Albums;
