import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import useState, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMovies} from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice'
import db from '../firebase';
const Home = ()=>{
   const dispatch=useDispatch();
   const username=useSelector(selectUserName);
    let recommend= [];
    let newDisney= [];
    let originals= [];
    let trending= [];
   useEffect(()=>{
    db.collection('movies').onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{
            console.log(newDisney);
            switch(doc.data().type){
                case 'recommend':
                    recommend=[...recommend,  {id:doc.id, ...doc.data()}]
                    break;
                case 'new':
                        newDisney=[...newDisney, {id:doc.id, ...doc.data()}]
                        break;
                case 'original':
                    originals=[...originals, {id:doc.id, ...doc.data()}]
                    break; 
                case 'trending':
                    trending=[...trending, {id:doc.id, ...doc.data()}]
                    break;   
            }
        })
    
    dispatch(
        setMovies({
        recommend:recommend,
        newdisney:newDisney,
        originals:originals,
        trending:trending,
    })
    )
})
   },[username])
    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
}
const Container=styled.main`
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    padding: 0px calc(3.5vw + 5px);
    overflow-x: hidden;
    display: block;

    &:after{
        background: url("/respose/images/home-background.png") center center / cover no-repeat fixed;
        position:absolute;
        opacity:1;
        z-index:-1;
        inset:0px;
        content:"";

    }

`;
export default Home;