import React from 'react'
import styled from 'styled-components'




// -->styling //
const Section = styled.section`
width: 100%;
height: 25rem;
position: relative;
border-top: 1px solid ${props => props.theme.text};
background-color:${props => `rgba(${props.theme.textRgba},0.9)`} ;
color:${props => props.theme.body};


display: flex;
justify-content: center;
align-items: center;
overflow:hidden;

@media (max-width:48em) {
    height:15rem;
    flex-direction:column;
}
`

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

img{
width: 15rem;
height:auto;
}

@media (max-width:48em) {
    img{
        width: 10rem;
        height:auto;
        }
}


`

const Title = styled.div`
font-size:${props => props.theme.fontxl} ;
color:${props => props.theme.body} ;
padding: 1rem 2rem;
z-index: 10;
text-shadow:1px 1px 2px ${props => props.theme.text}
width: 35%;
font-weight:600;


@media (max-width:64em) {
        width: 40%;
        text-align:center;
        font-size:${props => props.theme.fontxxl} ;
        }
@media (max-width:48em) {
        width: 100%;
        padding:2rem  0 ;
        font-size:${props => props.theme.fontxl} ;
        }
`


const BtnContainer = styled.div`
width:35%;
display:flex;
justify-content:end;
z-index:20;

@media (max-width:48em) {
    width: 100%;
    justify-content:center;
    }
`

const Call = styled.button`
display:inline-block;
outline: none;
border: none;
font-size:${props => props.theme.fontlg} ;
background-color:${props => props.theme.body} ;
color:${props => props.theme.text} ;
padding: 1.5rem 3rem;
border-radius: 50px;
font-weight:600;
cursor: pointer;
transition: all .2s ease;

@media (max-width:48em) {
    padding: 1rem 2rem;
    }
@media (max-width:30em) {
    padding: 1rem 2rem;
    font-size:${props => props.theme.fontsm} ;
    }


&:hover{
    transform: scale(0.9);

}

&::after{
content: '';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%)scale(0);
border: 2px solid ${props => props.theme.body} ; 
width: 100%;
height: 100%;
border-radius: 50px;
transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%,-50%)scale(1);
    padding:0.3rem;

}
`
// styling --> //



export default function Contact() {
    return (
        <Section>
            <ImageContainer>
                {/* <img src={js}   alt="js"    />
                <img src={html} alt="html"    />
                <img src={css}  alt="css"    />
                <img src={njs}  alt="njs"    />
                <img src={mui}  alt="mui"    /> */}
            </ImageContainer>
            <Title>Reach out to me and <br/> let's make something great together</Title>
            <BtnContainer>
                <a href="mailto:asferali8384@gmail.com?subject=Message%20From:&body=Hi%20Iam">
                    <Call >
                        EMAIL.NOW !
                    </Call>
                </a>
            </BtnContainer>
        </Section>
    )
}
