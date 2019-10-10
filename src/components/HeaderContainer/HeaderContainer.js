import styled from 'styled-components';
import HeaderImage from '../../utilis/img/photo1.jpg'

const HeaderContainer = styled.header`

    width:100%;
    overflow:hidden;
    background-image: url(${HeaderImage});
    background-position:center;
    background-size:cover;

    div{

        width:100%;
        margin: 0 5%;

        h1{

            margin-top: 8%;
            font-weight:900;
            letter-spacing:2px;
            text-transform:uppercase;
            
        }
    }

@media (max-width : 768px) {
    div{
        
        height:50vh;
        width:100%;

        h1{font-size:32px;
        display:table-caption;
        margin:30px 10px;
        }
    }
}

@media (min-width : 768px) {
    div{
        
        height:40vh;

        h1{
            font-size:42px;
            display:block;
            margin:50px 10px;
        }
    }
}


@media (min-width : 1224px) {
div{
    
    width:1200px;
    margin:auto;
    height:500px;

    h1{font-size: 55px;}
}
}

`;

export default HeaderContainer;