import React from 'react'
import styled, { keyframes } from 'styled-components'
import CoverViedo from './CoverViedo'
import Typertext from './Typertext'
import RoundText from "../../assets/Rounded-Text-Black.png"
import Image from './Image'

const Section = styled.section`
width: 100vw;
position: relative;
min-height:${props => `calc(100vh - ${props.theme.navHeight})`} ;
    
display:flex;
justify-content:center;
align-items:center;
`
const Container = styled.div`
width:75%;
position: absolute;
min-height:80vh ;
margin:0 auto;

display:flex;
justify-content:center;
align-items:center;

@media (max-width:64em) {
 width:85%;

}
@media (max-width:48em) {
flex-direction:column-reverse;

&>*:first-child{
   width:100%;
   margin-top:2rem;
}
}

`
const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
`

const rotate = keyframes`
100%
{
transform:rotate(1turn);
}
`

const Round = styled.div`
position: absolute;
bottom: 0rem;
right:- 50%;
width: 6rem;
height: 6rem;

img{
   width:100%;
   height:auto;
   animation:${rotate} 6s linear infinite reverse;
   border:1px solid ${props => props.theme.text};
   border-radius:50%
}

// @media (max-width:64em) {
//  width:4rem;
//  height:4rem;
//  right:2rem;
//  flex-direction:column;
//  bottom:108%;
//  display:none;
// }
// @media (max-width:48em) {
//  right:1rem;
//  display:none;

// }
`


const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

background-color:${props => props.theme.text} ;
color:${props => props.theme.body} ;
font-size:${props => props.theme.fontxl};

@media (max-width:64em) {
   width:2rem;
   height:2rem;
   font-size:${props => props.theme.fontlg};

  }
`


export default function Home() {
   return (
      <>
         <Section id='home'>
            <Container>
               <Box>
                  <Typertext />
               </Box>
               <Round>
                  <Circle>
                     &#x2193;
                  </Circle>
               </Round>
            </Container>
         </Section>
      </>
   )
}
