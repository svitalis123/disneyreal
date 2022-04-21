import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

const Detail=()=>{
    const {id}=useParams();
    const [detailData, setDetailData]=useState({});

    useEffect(()=>{
        db.collection('movies').doc(id).get().then((doc)=>{
            if(doc.exists){
                setDetailData(doc.data());
            }else{
                console.log("non-existing")
            }
        }).catch(error=>alert(error.message))
        
    },[id])
    return(
        <Container>
            <Background>
                <img
                    alt={detailData.title}
                    src={detailData.backgroundImg}
                />
            </Background>
            <ImgTitle>
                <img
                src={detailData.titleImg}
                alt={detailData.title}
                />
            </ImgTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img alt="" src="\respose\images\play-icon-black.png" />
                        <span>play</span>
                    </Player>
                    <Trailer>
                        <img alt="" src="\respose\images\play-icon-white.png" />
                        <span>trailer</span>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>
                    </AddList>
                    <GroupMatch>
                        <div>
                            <img
                            alt=""
                            src="\respose\images\group-icon.png"
                            />
                        </div>
                    </GroupMatch>
                </Controls>
                <SubTitle>
                    {detailData.subTitle}
                </SubTitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )

}
const Container=styled.div`
    display:block;
    position:relative;
    top:72px;
    overflow-x:hidden;
    min-height: calc(100vh-250px);
    padding: 0 calc(3.5vw + 5px);
    

`;
const Background=styled.div`
    top:0%;
    left:0%;
    right:0%;
    position:fixed;
    opacity:0.8;
    z-index:-1;
    img{
        width:100vw;
        height:100vh;

        @media (max-width:768px){
            width:initial;
        }
    }
    
`;
const ImgTitle=styled.div`
    display:flex;
    -webkit-box-pack:start;
    align-items:flex-end;
    justify-content:flex-start;
    height:30vh;
    min-height:170px;
    margin: 0px auto;
    padding-bottom:24px;
    width:100%;

    img{
        max-width:600px;
        min-width:200px;
        width:35vw;
    }
`;
const ContentMeta=styled.div`
    max-width:874px;
`;
const Controls=styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items:centre;
    margin:24px 0px;
    min-height:54px;
`;
const Player=styled.button`
display:flex;
align-items:center;
justify-content:center;
text-align:centre;
padding:0px 24px;
margin:0px 22px 0px 0px;
height:56px;
border-radius:4px;
border:none;
font-size:15px;
text-transform:uppercase;
letter-spacing:1.8px;
cursor:pointer;
background:rgb(249 249 249);
color:rgb(0,0,0);
img{
    width:32px;
}
&:hover{
    background:rgb(198,198,198);
}
@media (max-width:768px){
    padding:0px 12px;
    margin: 0px 10px 0px 0px;
    font-size:12px;
    height:45px;
    img{
        width:25px;
    }
}
`;
const Trailer=styled(Player)`
    background:rgba(0,0,0,0.3);
    color:rgb(249,249,249);
    border:1px solid #f9f9f9;
`;
const AddList=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.6);
    height:44px;
    width:44px;
    margin-right:16px;
    border-radius:50%;
    cursor:pointer;
    border:2px solid #f9f9f9;

    span{
        background-color:rgb(249,249,249);
        display:inline-block;
        &:first-child{
            height:2px;
            width:16px;
            transform:translate(1px 0px) rotate(0deg);
        }
        &:nth-child(2){
            width:2px;
            transform:translateX(-8px) rotate(0deg);
            height:16px;
        }
    }
`;
const GroupMatch=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:44px;
    width:44px;
    background-color:#f9f9f9;
    border-radius:50%;
    cursor:pointer;
    
    div{
        background:rgb(0,0,0);
        height:40px;
        width:40px;
        border-radius:50%;

        img{
            width:100%;
        }
    }

`;
const SubTitle= styled.div`
    font-size:15px;
    color:rgb(249,249,249);
    min-height:20px;
    @media (max-width:768px){
        font-size:12px;
    }
`;
const Description=styled.div`
    font-size:20px;
    color:rgb(249,249,249);
    padding:16px 0px;
    lin-height:1.6;
    @media (max-width:768px){
        font-size:14px;
    }
`;
export default Detail;