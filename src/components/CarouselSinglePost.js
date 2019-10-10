import React from 'react';
import SinglePostContainer from './SinglePostContainer/SinglePostContainer'


const CarouselSinglePost = (props) => {

    const { title, content, img, autor } = props.post;

    return (<SinglePostContainer post={img}>

        <div className="single-post-dektop">
            <div className="single-post-text">
                <h3>{title}</h3>
                <p>{content}</p>
                <span id="autor">{autor}</span>
            </div>
            <div className="single-post-img">
            </div>
        </div>

        <div className="single-post-mobile">
            <div className="single-post-img">
            </div>
            <div className="single-post-text">
                <h3>{title}</h3>
                <p>{content}</p>
                <span id="autor">{autor}</span>
            </div>
        </div>

    </SinglePostContainer>);
}

export default CarouselSinglePost;