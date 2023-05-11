import React from 'react'
import styled from 'styled-components'
import Contact from './section/Contact'
import Logo from './section/Logo'

// import images social
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'

const Section = styled.div`
width: 100vw;
min-height: 100vh;
height:100vh;
background-color:${props => props.theme.body};
position: relative;
color:${props => props.theme.text};

display: flex;
overflow: hidden;
flex-direction:column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:1px solid ${props => props.theme.text} ;

@media (max-width:48em) {
  width: 90%;
}
`

const Left = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction:column;

@media (max-width:48em) {
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;

&>*{
  padding-right:0.5rem;
  transition:all 0.3s ease;
}
&:hover{
  transform:scale(1.2)
}
`

const MenuItem = styled.ul`
display: grid;
width: 50%;
list-style: none;
grid-template-columns: repeat(2,1fr) ;
grid-template-rows:repeat(3,1fr) ;
gap: 1rem;

@media (max-width:48em) {
  display:none;
}

`
const Item = styled.div`
width: fit-content;
cursor: pointer;

&::after{
  content: " ";
  display: block;
  width: 0%;
  height: 2px;
  transition:all  0.3s ease-out;
  background-color:${props => props.theme.text};
  
  }
  &:hover::after{
  width:100%
  }
  
`
const List = styled.div`
display:flex;
transition: all 0.3s ease;
`

const Bottom = styled.div`
width:75%;
display:flex;
justify-content:space-between;
align-item:center;
margin 0 auto;

@media (max-width:48em) {
  flex-direction:column;
  width:100%;


  span{
    margin-bottom:1rem;
    text-align:center;

  }
}
`

export default function Footer() {

  const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })

  }


  return (
    <Section>
      <Contact />
      <Container>
        <Left>
          <List>
            <IconList>
              <a href="https://www.google.com/"><Facebook /></a>
            </IconList>
            <IconList>
              <a href="https://www.google.com/"><Instagram /></a>
            </IconList>
            <IconList>
              <a href="https://www.google.com/"><Twitter /></a>
            </IconList>
            <IconList>
              <a href="https://www.google.com/"><LinkedIn /></a>
            </IconList>
          </List>
        </Left>
        <MenuItem>
          <Item onClick={() => scrollTo("navigation")} >Home</Item>
          <Item onClick={() => scrollTo("blog")}>Blog</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("skills")}>skills</Item>
          <Item onClick={() => scrollTo("work")}>Work</Item>
          <Item onClick={() => scrollTo("dummy")}>Contact</Item>
        </MenuItem>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()} All Rights Reserved
        </span>
        <span>
          MOHAMMED ASFER ALI
        </span>
      </Bottom>
    </Section>
  )
}
