import styled from 'styled-components'
import { auth, provider } from '../firebase';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails} from '../features/user/userSlice'
import { useEffect } from 'react';
const Header=(props)=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
            setUser(user);
            history.push("/home");
            }
        })
    },[userName])
    const handleAuth=(e)=>{
        e.preventDefault();
        if(!userName){
        auth.signInWithPopup(provider).then((answer)=>{
            console.log(answer);
            setUser(answer.user)
        }).catch(error=>alert(error.message));
        }else if(userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push("/");
            }).catch(error=>alert(error.message));
        }
    }
    const setUser=(user)=>{     
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            })
        )
    }
   
    return(
        <Nav>
            <Logo onClick={(e)=>history.push("/home")}>
                <img src="\respose\images\logo.svg" alt="disneylogo" />
            </Logo>
            {
                !userName? <Login type="submit" onClick={handleAuth} >login</Login>:
                <>
                <NavMenu>
                <a href="/" >
                    <img src="\respose\images\home-icon.svg" alt="homeicon" />
                    <span>Home</span>
                </a>
                <a href="/search" >
                    <img src="\respose\images\search-icon.svg" alt="search" />
                    <span>search</span>
                </a>
                <a href="/watchlist" >
                    <img src="\respose\images\watchlist-icon.svg" alt="watchlist" />
                    <span>watchlist</span>
                </a>
                <a href="/originals" >
                    <img src="\respose\images\original-icon.svg" alt="originals" />
                    <span>originals</span>
                </a>
                <a href="/movies" >
                    <img src="\respose\images\movie-icon.svg" alt="movies" />
                    <span>movies</span>
                </a>
                <a href="/series" >
                    <img src="\respose\images\series-icon.svg" alt="series" />
                    <span>series</span>
                </a>
            </NavMenu>
                <SignOut>
                    <USERIMG src={userPhoto} alt={userName} />
                    <DropDown>
                        <span onClick={handleAuth}>Sign Out</span>
                    </DropDown>
                </SignOut>
           
                </>
            }
        </Nav>
    )
}
const Nav=styled.div`
    display:flex;
    position:fixed;
    background-color: #090b13;
    z-index:3;
    justify-content:space-between;
    align-items:center;
    top:0%;
    right:0%;
    left:0%;
    padding:0 36px;
    letter-spacing:16px;
    height:70px;
    width:100%;
    

`
const Logo=styled.div`
    width:80px;
    margin-top:4px;
    padding:0px
    display:inline-block;
    max-height:70px;
    cursor:pointer;
    font-size:0;
    img{
        display:block;
        width:100%;
    }

`;
const NavMenu=styled.div`
    display:flex;
    margin:0%;
    padding:0%;
    justify-content:flex-end;
    position:relative;
    height:100%;
    align-items:center;
    margin-right:auto;
    margin-left:25px;
    flex-flow: nowrap;
    
    
    a{
        display:flex;
        align-items:centre;
        padding:0 12px;
        img{
            width:20px;
            min-width:20px;
            height:20px;
            z-index:auto;
        }
        span{
            color:rgba(249,249,249);
            font-size:13px;
            text-transform: uppercase;
            letter-spacing:1.42px;
            line-height:1.08;
            padding  2px 0;
            white-space:nowrap;
            position:relative;

            &:before {
                position:absolute;
                background-color:rgba(249,249,249);
                border-radius: 0px 0px 4px 4px;
                content:"";
                bottom:-6px;
                right:0px;
                left:0px;
                height:2px;
                opacity:0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }

        }
        &:hover {
            span:before {
                visibility: visible;
                transform: scaleX(1);
                opacity: 1;
            }
        }
       
    }
   
     @media (max-width:768px){
        display:none;
    }
`;
const Login=styled.a`
    
    letter-spacing:1.5px;
    border:1px #f9f9f9 solid;
    padding:8px 16px;
    border-radius:4px;
    background-color:rgba(0,0,0,0.6);
    transition:all 0.2s ease 0s;
    text-transform: uppercase;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`;
const USERIMG=styled.img`
    border-radius:50%;
    width:100%;
    height:100%;
`;
const DropDown=styled.div`
position:absolute;
top:48px;
right:0%;
width:100px;
background-color:rgba(19,19,19);
padding:10px;
font-size:14px;
letter-spacing:3px;
text-transform:capitalize;
box-shadow:(rgba(0 0 0 /50%) 0px 0px 18px 0px);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
opacity:0;
cursor:pointer;

`;
const SignOut=styled.div`
position:relative;
height:48px;
width:48px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;

&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration: 1s;
    }
}
`;

export default Header;