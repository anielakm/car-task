import styled from 'styled-components'
import { theme } from '../../utilis/theme'

const SinglePostContainer = styled.div`
display:flex;
background-color:white;

.single-post-text, .single-post-img{
    width:50%;
    height:300px;
}

.single-post-text{

padding: 0 5%;
position:relative;

    h3{
        font-family:${theme.fonts.roboto};
        text-transform:uppercase;
        font-weight:400;
        margin: 2% 0;
    }
    p{
        color:gray;
        font-size:14px;
    }
    #autor{
        position:absolute;
        bottom:0;
        right:0;
        padding: 7%;
        text-transform:capitalize;
        font-size:14px;
        color:gray;
        
    }

}
.single-post-img{
background-image:url(${(props) => props.post}});
background-position:center;
background-size:cover;
display:block;

}

@media(max-width:768px){
.single-post-dektop{display:none;}
.single-post-mobile{display:block}

.single-post-text, .single-post-img{
    width:100%;
    
}
.single-post-text{
    height:auto;
    padding:7%;
    }
.single-post-img{height:300px}

}

@media(min-width:768px){
.single-post-mobile{display:none}
.single-post-dektop{
    display:flex;
    width:100%;

.single-post-text, .single-post-img{
   width:50%;
   height:400px;
}}



}

@media(min-width:1280px){

width:1200px;
}


`;

export default SinglePostContainer;