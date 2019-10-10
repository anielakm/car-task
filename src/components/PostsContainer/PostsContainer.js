import styled from 'styled-components'
import { theme } from '../../utilis/theme'

const PostsContainer = styled.div`

    background-color:${theme.colors.beige};
    width:100%;
    padding-top:1%;

    .posts-container{
        width:100%;
        margin:auto;
    }

    img{
        width:100%;
        max-height:200px;
    }

    .slider-contollers{

    text-align:right;
    width:50%;
    background-color:white;
    padding:5px;
    display:block;

    button{

    background-color:black;
    color:white;
    font-size:16px;
    padding:5px 10px;

    }

    button:focus {outline:0;}

    }

    .slider-contollers-mobile{

        background-color:transparent;
        text-align:center;
        
        button{

            background-color:black;
            color:white;
            margin:15px 1px 30px;
            font-size:14px;
            text-transform:uppercase;
            font-weight:600;
            padding:7px 25px;

        }
    }

@media(max-width:768px){
    
    .posts-container{

    width:90%;

    .slider-contollers{display:none;}
    .slider-contollers-mobile{display:block;}

    }

}

@media(min-width:768px){

    padding-bottom:5vh;
    
    .posts-container{
   
    width:90%;

    .slider-contollers{ display:block;}
    .slider-contollers-mobile{ display:none;}
   
    }

}

@media(min-width:1280px){

    height:500px;
    padding-bottom:0;
    
    .posts-container{width:1200px;}

}`;

export default PostsContainer;