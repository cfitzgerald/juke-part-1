import React, { Component } from 'react';


class Sidebar extends Component {
  render(){
    return (
      <div>
      <div className="col-xs-2">
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#">ALBUMS</a>
            </h4>
          </section>
        </sidebar>
      </div>

      <div className="col-xs-10">
      </div>
      </div>
    )
  }
}

export default Sidebar
