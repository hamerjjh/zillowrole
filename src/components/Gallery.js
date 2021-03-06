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

    nextPhoto = () => {
        const newIndex = this.state.photo.index+1;
        this.setState({
            photo: Data.galleryList[newIndex]
        })
    }

    prevPhoto = () => {
        const newIndex = this.state.photo.index-1;
        this.setState({
            photo: Data.galleryList[newIndex]
        })
    }
  render () {
    const {galleryList, photo} = this.state;
    return (

        <div className="App">
            <p>Project By: Jonathan Hamer</p>
            <button onClick={() => this.nextPhoto()} disabled={photo.index === Data.galleryList.length-1}>
                Next Photo
            </button>
            <button onClick={() => this.prevPhoto()} disabled={photo.index === 0} >
                Previous Photo
            </button>
            <div className="col">
                <div className={`cards-slider active-slide-${photo.index}`}>
                    <div className="cards-slider-wrapper" style={{
                        'transform': `translateX(-${photo.index*(100/galleryList.length)}%)`
                    }}>
                        {
                        galleryList.map(photo => <Photo key={photo.index} photo={photo} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Gallery;
