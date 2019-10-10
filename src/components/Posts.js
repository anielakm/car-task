import React, { Component } from 'react';
import Slider from "react-slick";
import CarouselSinglePost from './CarouselSinglePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PostsContainer from './PostsContainer/PostsContainer'


class Posts extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = {
            posts: []
        }
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/anielakm/posts-data/posts")
            .then(res => res.json())
            .then(json => this.setState({ posts: json }));

    }

    render() {
        var settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true

        };
        return (

            < PostsContainer >
                <div className="posts-container">

                    <div className="slider-contollers">
                        <button onClick={this.previous}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button onClick={this.next}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>

                    <Slider ref={c => (this.slider = c)} {...settings}>

                        {this.state.posts.slice(0, 10).map(item => <div><CarouselSinglePost post={item} key={item.id} /></div>)}

                    </Slider>

                    <div className="slider-contollers-mobile">
                        <button onClick={this.previous}><FontAwesomeIcon icon={faChevronLeft} /> previous</button>
                        <button onClick={this.next}>next <FontAwesomeIcon icon={faChevronRight} /> </button>
                    </div>

                </div>

            </PostsContainer >

        );

    }


}

export default Posts;