import React, { useState } from 'react'

import styled from 'styled-components'
import Button from './Button'
import Logo from './section/Logo'



const Section = styled.section`
width:100vw;
background-color:${props => props.theme.body};
`
const NavBar = styled.nav`
width:85%;
height:${props => props.theme.navHeight};
display:flex;
justify-content:space-between;
align-items:center;
margin:0 auto;

.mobile{
  display:none;
}

@media (max-width:64em) {
  .desktop{
    display:none;
  }
  .mobile{
    display:inline-block;
  }
}
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width:64em) {
  position: fixed;
  top:${props => props.theme.navHeight} ;
  left:0 ;
  right:0 ;
  bottom:0 ;
  width:100vw ;
  height:${props => ` calc(100vh - ${props.theme.navHeight})`} ;
  z-index:50 ;
  background-color:${props => `rgba(${props.theme.bodyRgba},0.85)`} ;
  transform:${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
  backdrop-filter: (2px);
  transition: all 0.3s ease-out ;

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  }

`
const MenuItem = styled.li`
margin:1rem;

color:${props => props.theme.text};
cursor: pointer;

&::after{
content: " ";
display: block;
width: 0%;
height: 2px;
transition:  0.3s ease-out;
background-color: black;

}

&:hover::after{
  width: 100%;
}

@media (max-width:64em) {
  margin:1rem 0;
  }
`

const HamBruger = styled.div`
width:${props => props.click ? '2rem' : '1.5rem'};
height:2px ;
background-color:${props => props.theme.text} ;

position: absolute;
top:2rem;
left:50% ;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'};
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
transition: all 0.3s ease;
display:none;

@media (max-width: 64em) {
  display:flex;
}


&::after, &::before {
  content:' ';
  height:2px;
  width:${props => props.click ? '1rem' : '1.5rem'};
  right:${props => props.click ? '-2px' : '0rem'};
  background-color:${props => props.theme.text} ;
  position:absolute;
}

&::after{
  top:${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0deg)'};

}
&::before{
  bottom:${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0deg)'};

}
`

const Navigation = () => {

  const [click, setClick] = useState(false)
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
    setClick(!click)

  }


  return (
    <Section id='navigation'>
      <NavBar>
        {/* <Logo /> */}
        <HamBruger click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamBruger>
        <Menu click={click} >
          {/* <MenuItem onClick={() => scrollTo("navigation")}   >Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}  >About</MenuItem>
          <MenuItem onClick={() => scrollTo("work")}   >Works</MenuItem>
          <MenuItem onClick={() => scrollTo("blog")}   >Blogs</MenuItem>
          <MenuItem onClick={() => scrollTo("skills")}   >Skills</MenuItem>
          <MenuItem onClick={() => scrollTo("contact")}  >Contact</MenuItem> */}
          <MenuItem>
            <div class='mobile'>
              <a href="https://drive.google.com/file/d/1PXLGMawBTbmJOdfiOnaWDWsEJZg12mrS/view?usp=share_link"><Button text="RESUME" link="" /></a>
            </div>
          </MenuItem>
        </Menu>
        <div class='desktop'>
          <a href="https://drive.google.com/file/d/1PXLGMawBTbmJOdfiOnaWDWsEJZg12mrS/view?usp=share_link"><Button text="RESUME" link="" /></a>
        </div>
      </NavBar>
    </Section>
  )
}

export default Navigation