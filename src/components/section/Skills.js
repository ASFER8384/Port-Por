import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'


const Section = styled.section`
width: 100vw;
height:auto;
overflow:hidden;
background-color:${(props) => props.theme.body};
    
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

// &>*:first-child(){
//   animation-duration:20s;
//   @media (max-width:30em) {
//     animation-duration:15s;
//   }

// }
// &>*:last-child(){
//   animation-duration:20s;
//   @media (max-width:30em) {
//     animation-duration:10s;
//   }
  
// }
`

const move = keyframes`
0%{transform:translateX(100%)};
100%{transform:translateX(-100%)}
`

const Box = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0 ;
display: flex;

animation:${move} 30s linear infinite ${props => props.direction} ;
`
const Imagecontainer = styled.div`

width: 15rem;
margin: 0 1rem;
background-color:${(props) => props.theme.body} ;
border-radius: 20px;
cursor: pointer;
padding:10px 10px;


@media (max-width:48em) {
  width: 12rem;
}
@media (max-width:30em) {
  width: 10rem;
}

img{
  width:100%;
  height:auto;
}
`
const Details = styled.div`
display: flex;
justify-content:center;
padding:0.8rem 1rem;
margin-top:1rem;
background-color:${props => props.theme.text};
color:${props => props.theme.body};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px ;

span{
font-size:${props => props.theme.fontxl};
color:${props => props.theme.body};
font-weight: 600;
line-height: 1.8rem;

h1{
  font-size:${props => props.theme.fontmd};
  color:${props => props.theme.body};
  font-weight: 600;

  @media (max-width:30em) {
    font-size:${props => props.theme.fontsm};
  }

}
}
`
const Title = styled.h2`
font-size:${(props) => props.theme.fontxxl};
text-transform: capitalize;
width:100%;
color:${props => props.theme.text};
display: flex;
justify-content: center;
margin:1rem auto;
border-bottom:2px solid ${props => props.theme.text};
width:fit-content; 
`

const BlogImage = ({ img, text, passRef }) => {


  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";

  }

  return (
    <Imagecontainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}  >
      <img src={img} alt="" />
      <Details>
        <div>
          <span>{text}</span>
        </div>
      </Details>
    </Imagecontainer>
  )
}


export default function Skills() {
  const RowRef1 = useRef(null)
  const RowRef2 = useRef(null)

  return (

    <Section id='skills'>
      <Title>
        Skills
      </Title>
      <Box direction="none">
        <span>React.js-</span>
        <span>Node.js-</span>
        <span>Express.js-</span>
        <span>Html-</span>
        <span>Css.js-</span>
        <span>Bootstrap-</span>
        <span>Aws-</span>
        <span>Data Structure-</span>
        <span>Data Design-</span>
        <span>Javascript-</span>
        <span>React.js-</span>
        <span>Node.js-</span>
        <span>Express.js-</span>
        <span>Html-</span>
        <span>Css.js-</span>
        <span>Bootstrap-</span>
        <span>Aws-</span>
        <span>Data Structure-</span>
        <span>Data Design-</span>
        <span>Javascript-</span>

      </Box>
      <Box direction="reverse">
        <span>React.js-</span>
        <span>Node.js</span>
        <span>Express.js-</span>
        <span>Html-</span>
        <span>Css.js-</span>
        <span>Bootstrap.js-</span>
        <span>Aws-</span>
        <span>Data Structure-</span>
        <span>Data Design-</span>
        <span>Javascript-</span>
        <span>React.js-</span>
        <span>Node.js-</span>
        <span>Express.js-</span>
        <span>Html-</span>
        <span>Css.js-</span>
        <span>Bootstrap-</span>
        <span>Aws-</span>
        <span>Data Structure-</span>
        <span>Data Design-</span>
        <span>Javascript-</span>
      </Box>
    </Section>
  )
}
