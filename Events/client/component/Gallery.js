import React from 'react';
import Lightbox from 'react-image-lightbox';

class Gallery extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            image: { path: 1 },
             isOpen: false
         
        };
    }
  
    nextSlide = () => {
 
        if (this.state.image.path === 5) {
           
            this.setState({ image: { path: 1 } });
        } else {
            this.setState({ image: { path: this.state.image.path + 1 } });
        }
        console.log("inside slide"+this.state.image.path);
    }

    prevSlide = () => {
 
        if (this.state.image.path === 1) {
            this.setState({ image: { path: 5 } });
        } else {
            this.setState({ image: { path: this.state.image.path - 1 } });
        }
        console.log("inside slide"+this.state.image.path);
    }

    render(props) {
        return (

            <div>
            <center><h1>Gallery</h1></center>
<div className="responsive">
<div className='shadow'>
  <div className="gallery">
    <a target="_blank" onClick={() => this.setState({ isOpen: true,image: { path: 1 } })}>
      <img src={require('./slideImage/1.png')} alt="Trolltunga Norway" width="300" height="200"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>
 </div>

<div className="responsive">
<div className='shadow'>
  <div className="gallery">
    <a target="_blank" onClick={() => this.setState({ isOpen: true,image: { path: 2 } })}>
      <img src={require('./slideImage/2.png')} alt="Forest" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>
 </div>

<div className="responsive">
<div className='shadow'>
  <div className="gallery">
    <a target="_blank"onClick={() => this.setState({ isOpen: true, image: { path: 3 }})}>
      <img src={require('./slideImage/3.png')} alt="Northern Lights" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
  </div>
</div>

<div className="responsive ">
<div className='shadow'>
 <a target="_blank"onClick={() => this.setState({ isOpen: true, image: { path: 4 }})}>
  <div className="gallery lastimage">
    <div>  <b> View More</b></div>
   
   </div>
   </a>
    <div class="desc">Add a description of the image here</div>
</div>
 </div>


{this.state.isOpen && (
          <Lightbox
            mainSrc={require('./slideImage/' + this.state.image.path + '.png')} 
            nextSrc={require('./slideImage/' + this.state.image.path + '.png')} 
            prevSrc={require('./slideImage/' + this.state.image.path + '.png')} 
          
            imageCaption="Photo by XYZ"
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={this.prevSlide.bind(this)}
            onMoveNextRequest={this.nextSlide.bind(this)}
          />
        )}

</div>  )
    }
}

export default Gallery;