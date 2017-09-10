import React, { Component } from 'react';

class SingleAlbum extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className="album col-xs-10">
        <div>
          <h3>{ album.name }</h3>
          <img src="" className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <td>"I SHOULD BE A SONG NAME"</td>
              <td>"I SHOULD BE A STRING OF THIS SONG'S ARTISTS"</td>
              <td>I SHOULD BE A SONG GENRE</td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <td>I SHOULD BE ANOTHER SONG NAME</td>
              <td>"I SHOULD BE A STRING OF THAT SONG'S ARTISTS"</td>
              <td>I SHOULD BE A SONG GENRE</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SingleAlbum;
