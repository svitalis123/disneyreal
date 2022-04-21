import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const ImgSlider=()=>{
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return(
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="\respose\images\slider-badging.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="\respose\images\slider-scale.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="\respose\images\slider-badag.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="\respose\images\slider-scales.jpg" alt=""/>
                </a>
            </Wrap>
        </Carousel>
    )
}
const Carousel=styled(Slider)`
 top:20px;
    & > button {
        height:100%;
        width:5vw;
        z-index:1;
        opacity:0;
        &:hover{
            opacity:1;
            transition: opacity 0.2s ease 0;
        }
    }
    ul li button{
        &:before{
            font-size:12px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button:before{
        color:#fff;
    }
    .slick-list{
        overflow:initial;
    }
    .slick-prev {
        left:-75px;
    }
    .slick-next {
        right:-75px;
    }
`;
const Wrap=styled.div`
position:relative;
cursor:pointer;
border-radius:4px;
    a{
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor:pointer;
        display:block;
        position:relative;
        padding:4px;
        
        img{
            width:100%;
            height:100%;
        }
        &:hover{
            padding:0;
            border:4px solid rgba(249, 249, 249,0.8);
            transition-duration:300ms;
        }
    }
`;
export default ImgSlider;