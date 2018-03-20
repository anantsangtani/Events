import React from 'react';

class Gallery extends React.Component {
    render(props) {
        return (
            <div>
            <center><h2>Gallery</h2></center>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href={require('./slideImage/1.png')}>
      <img src={require('./slideImage/1.png')} alt="Trolltunga Norway" width="300" height="200"/>
    </a>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href={require('./slideImage/2.png')}>
      <img src={require('./slideImage/2.png')} alt="Forest" width="600" height="400"/>
    </a>
   
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href={require('./slideImage/3.png')}>
      <img src={require('./slideImage/3.png')} alt="Northern Lights" width="600" height="400"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href={require('./slideImage/4.png')}>
      <img src={require('./slideImage/4.png')} alt="Mountains" width="600" height="400"/>
    </a>
  </div>
</div>
</div>  )
    }
}

export default Gallery;