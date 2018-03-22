import React from 'react';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: { path: 1 },
            class: ""
        };
    }

    componentWillMount() {
        console.log(window.outerWidth);
        if (window.outerWidth <= 576) {
            console.log("width 576");
            this.setState({ class: "slideshow1" })
        }
        else {
            console.log("width greater");

            this.setState({ class: "slideshow" })

        }
    }

    nextSlide = () => {
 
        if (this.state.image.path === 3) {
           
            this.setState({ image: { path: 1 } });
        } else {
            this.setState({ image: { path: this.state.image.path + 1 } });
        }
        console.log("inside slide"+this.state.image.path);
    }

    prevSlide = () => {
 
        if (this.state.image.path === 1) {
            this.setState({ image: { path: 3 } });
        } else {
            this.setState({ image: { path: this.state.image.path - 1 } });
        }
        console.log("inside slide"+this.state.image.path);
    }

    render() {
        return (
            <div className={this.state.class}>
                <div class="slideshow-container">

                    <div>
                        <div class="numbertext">1 / 3</div>
                        <img src={require('./slideImage/' + this.state.image.path + '.png')} />
                        <div class="text">Caption Text</div>
                    </div>

                    <a class="prev" onClick={this.prevSlide.bind(this)}>&#10094;</a>
                    <a class="next" onClick={this.nextSlide.bind(this)}>&#10095;</a>
                </div>
                <br />


                <div>
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>

            </div>
        );
    }
}