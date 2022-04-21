import styled from  'styled-components'

const Login=(props)=>{
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogo src="\respose\images\cta-logo-one.svg" alt="ctalogo"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>get premier access to raya and the last dragon for 
                     an additonal fee with a disney+ subscription. as of
                     02/12/2021, the price of disney+ and the disney bundle will increase by $1.
                    </Description>
                    <CTALogo2 src="\respose\images\cta-logo-two.png" alt="ctalogo2"/>
                </CTA>
                <BgImg />
            </Content>
        </Container>
    )
}
const Container=styled.section`
    display:flex;
    flex-direction:column;
    overflow:hidden;
    text-align: center;
    height:100vh;
`;
const Content=styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    margin-bottom:10vw;
    width:100%;
    box-sizing:border-box;
    padding: 80px 40px;
    height: 100%
`;
const BgImg=styled.div`
background-image: url("/respose/images/login-background.jpg");
background-position:top;
background-size:cover;
background-repeat:no-repeat;
position:absolute;
height:100%;
top:0%;
right:0%;
left:0%;
z-index:-1;
`;
const CTA=styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    
    justify-content:center;
    align-items:center;
    text-align:centre;
    max-width:650px;
    margin-bottom:2vw;
    margin-right:auto;
    margin-left:auto;
    margin-top:0%;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width:100%;
`;
const CTALogo=styled.img`
    display:block;
    margin-bottom:14px;
    max-width:600px;
    width:100%;
    min-height:1px;
`;
const SignUp=styled.a`
    
    width:100%;
    padding:16.5px 0;
    letter-spacing: 1.5px;
    font-weight:bold;
    font-size:18px;
    border: 1px solid transparent;
    border-radius:4px;
    color:#f9f9f9;
    background-color:#0063e5;
    margin-bottom:12px;
&:hover{
    background-color:#0483ed;
}
`;
const Description=styled.p`
color: hsla(0, 0%, 95.3%, 1);
line-height:1.5;
letter-spacing:1.5px;
margin: 0 0 24px;
font-size:11px;
text-transform:capitalize;
`
const CTALogo2=styled.img`
max-width:600px;
width:100%;
vertical-align: bottom;
display:inline-block;
margin-bottom:20px;
`
export default Login