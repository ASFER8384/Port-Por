import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Drawsvg from './Drawsvg'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "./globalstyle.css"



// styling--> //
const Section = styled.section`
width:100vw;
background-color:${props => props.theme.body};
position:relative;
cursor:pointer;
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

@media (max-width:48em) {
  font-size:${(props) => props.theme.fontxl};
}
`

const Container = styled.div`
width:70%
background-color:${props => props.theme.body};
margin:0 auto;
display:flex;
height:200vh;
justify-content:center;
align-items: center;
position: relative;


@media (max-width:64em) {
  width:80%;
 }

 
@media (max-width:48em) {
  width:90%;
 }
 
`


const SvgContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
`



const Items = styled.ul`
display: flex;
justify-content: center;
align-items:center ;
width: 100%;
height: 100%;
flex-direction: column;
list-style: none;

&>*:nth-of-type(2n+1){
justify-content: start;

@media (max-width:48em){
    justify-content: center;
  }

}

&>*:nth-of-type(2n){
  justify-content: end; 

  @media (max-width:48em){
    justify-content: center;
  }

}
@media (max-width:40em) {
  .Item{
    display:none;
  }
}
`

const Item = styled.li`
width: 80%;
height: 100%;
display: flex;

@media (max-width:48em) {
  justify-content: flex-end !important;
 }
`


const ItemContainer = styled.div`
width: 40%;
padding: 1rem;
display:flex;
height: fit-content;
border: 1px solid ${props => props.theme.text};

@media (max-width:48em) {
  width: 70%;
 }
`


const Box = styled.p`
height: fit-content;
background-color:${props => props.theme.carouse1Color};
color:${props => props.theme.text};
padding: 1rem;
display:flex;
flex-direction:column;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.h2`
@media (max-width:40em) {
  font-size:${(props) => props.theme.fontlg};
}
`


const Text = styled.span`
@media (max-width:40em) {
  font-size:${(props) => props.theme.fontxs};
}
`
//styling--> //

const RoadmapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

export default function Blogs() {

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
      gsap.registerPlugin(ScrollTrigger)
    }
  }

  useEffect(() => {
    let t1 = gsap.timeline()
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0"
        }, {
        y: "-30%",
        scrollTrigger: {
          id: `section-${index + 1}`,
          start: "top center+=200px",
          end: "bottom center",
          scrub: true,
        }
      },

      )
    })
  }, [])



  return (
    <Section id='blog'>
     <Title>
      <a href="https://differencebetweenhttp.blogspot.com/" target="_blank" >Blog</a> <br/>
      <span className='para'>Click me</span>
     </Title>
      <Container>
        <SvgContainer>
          <Drawsvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>



          <RoadmapItem addToRef={addToRef} title="Finance" subtext="Money management is something everyone is concerned with, from the adolescent working to get their first credit card to the entrepreneur wanting to exponentially grow their personal savings." />


          <RoadmapItem addToRef={addToRef} title="Business" subtext="Money management is something everyone is concerned with, from the adolescent working to get their first credit card to the entrepreneur wanting to exponentially grow their personal savings." />

          <RoadmapItem addToRef={addToRef} title=" Representation Java Script
" subtext="JavaScript uses a prototype-based inheritance model, which means that objects can inherit properties and methods from other objects." />

          <RoadmapItem addToRef={addToRef} title="HTTP/1.1 Vs HTTP/2" subtext="HTTP/2 includes several significant improvements over HTTP/1.1, including support for multiplexing, a binary format for data transmission, header compression, server push, and prioritization. " />
        </Items>
      </Container>
    </Section>
  )
}
