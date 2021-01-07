import React, { Component } from 'react';
import Data from "../Data";
import Photo from "./Photo";

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
             {
                galleryList.map(photo => <Photo key={photo.index} photo={photo} />)
             }
        </div>
    )
  }
}

export default Gallery;
