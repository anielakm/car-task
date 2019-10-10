import styled from 'styled-components'
import { theme } from '../../utilis/theme'
import AboutImage from '../../utilis/img/about.jpeg'

const AboutContainer = styled.div`

    width:100%;
    background-color:${theme.colors.beige};

    .about-container{

        width:90%;
        margin:auto;
        display:flex;

        div{

            margin-top:-5%;
            display:flex;
            align-items: left;
            justify-content: center;
            flex-direction:column;
            background-color:white;
            height:300px;
        
        }

        #left{
            background-image:url(${AboutImage});
            background-position:center;
            background-size:cover;
        }

        #right{
            padding:0 5%;

            h2{
            font-family:${theme.fonts.roboto};
            text-transform:uppercase;
            letter-spacing:1px;
            font-weight:400;
            }
            p{
                font-weight:400;
                color:gray;
        
            }
        }

    }

@media (max-width : 768px) {
    .about-container{
    
        display:block;
        padding:10% 0 5%;

        div{

            width:100%;
            display:block;
          
            h2{font-size:24px}
            p{font-size:14px;}

           
        }
                
        #left{height:250px};

        #right{

            height:auto;
            padding:7%;

        };
    }
}

@media (min-width : 768px) {
   
 .about-container{
    
    display:flex;

    div{
        width:100%;
        display:flex;

        h2{font-size:24px}
    }
            
    #left, #right{
        
        height:300px;
        width:50%;
    
    };
   
}
}

@media (min-width : 1224px) {
.about-container{
    
    width:1200px;
    margin:auto;

    #left, #right{

        height:400px;
        width:50%;

        h2{font-size:32px}
        p{font-size:16px}
    }
}
}
`

export default AboutContainer;