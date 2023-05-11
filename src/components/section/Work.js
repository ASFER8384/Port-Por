import React, { } from 'react'
import styled from 'styled-components'


import hm from '../../assets/Skill-Icon/h1m.png'
import food from '../../assets/Skill-Icon/food.jpg'
import chat from '../../assets/Skill-Icon/chat.png'
import hall from '../../assets/Skill-Icon/book.png'
import amazon from '../../assets/Skill-Icon/amazon.png'
import blog from '../../assets/Skill-Icon/blog.png'


const Section = styled.section`
width:100vw;
height:auto;
background-color:${props => props.theme.body};
position:relative;
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

const Container = styled.div`
// width:75%;
margin:2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`


const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0 ;

color:${props => props.theme.body} ;
margin: 2rem 1rem;
position: relative;

border:2px solid ${props => props.theme.text};
border-radius:20px;

// &:hover{
//     img{
//         transform:translateY(-2rem) scale(1.2);
//     }
// }
`


const ImageContainer = styled.div`
width: 15rem;
margin: 0 auto;
background-color:${(props) => props.theme.carouse1Color} ;
border-radius: 20px;
cursor: pointer;
border:2px solid ${props => props.theme.text};

img{
  width:100%;
  height:auto;
  transition: all 0.1s ease;
  border-radius: 20px;


}
`


const Tittle = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
margin-top: 1rem;
font-size:${(props) => props.theme.fontlg} ;
color:${(props) => props.theme.text} ;
font-weight: 600;

@media (max-width:19em){
    font-size:${props => props.theme.fontxs};
    text-align:center;
  }
`


const Quote = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
margin-top: 1rem;
font-size:${(props) => props.theme.fontsm} ;
color:${(props) => `rgba(${props.theme.textRgba},0.9)`} ;
`


const Blogs = ({ img, name = "", subTitle = "" }) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
                <Tittle>{name}</Tittle>
                <Quote>{subTitle}</Quote>
        </Item>
    )
}


export default function Work() {

    return (
        <Section id='work' >
            <Title>
                Latest Work
            </Title>
            <Container>
                <a href="https://amethyst-puppy-slip.cyclic.app/"  target="_blank"><Blogs name="Food-App" subTitle="#AdminPanel #UserPanel" img={food} /></a>

                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="H&M-clone" subTitle="#userOrder #AdminCreation" img={hm} /></a>

                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Blog-App" subTitle="#CreateBlog #PublishBlog" img={blog} /></a>

                <a href="https://www.wix.com/blog/2021/01/blog-niche-ideas/#viewer-3gll7"><Blogs  name="Amazon-clone" subTitle="Comming soon - 80%" img={amazon} /></a>

                <a href="#"><Blogs name="chat-gpt" subTitle="Comming soon - 50%" img={chat} /></a>

                <a href="#"><Blogs name="Hall-booking" subTitle="Researching" img={hall} /></a>
            </Container>
        </Section>
    )
}
