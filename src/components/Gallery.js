import React, { Component } from 'react';
import Data from "../Data";

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            galleryList: Data.galleryList,
            photo: Data.galleryList[0],
        }
    }
  render () {
    const {galleryList, photo} = this.state;
    return (

        <div>
            <h1>This is where the photo gallery will go</h1>
        </div>
    )
  }
}

export default Gallery;
