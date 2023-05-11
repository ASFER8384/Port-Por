import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'



const Section = styled.section`
height:100vh;
width:100vw;
background-color:${props => props.theme.text};
display:flex;
justify-content:center;
align-items:center;
color:${props => props.theme.body};
font-size:2rem;
// background: linear-gradient(), url(https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg);
text-align:center;
`

export default function ContactPage() {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  }, [])

  return (
    <Section id='contact' ref={ref}>
      Do you have a project?I would love to help.
    </Section>
  )
}



