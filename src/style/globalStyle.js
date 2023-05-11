import {createGlobalStyle} from 'styled-components'
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"




const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    padding:0;
    margin:0;
}
body{
    font-family:sora;
    overflow-x:hidden
}
h1,h2,h3,h4,h5,h6{
    padding:0;
    margin:0;
}
a{
    color:inherit;
    text-decoration:none;
}

`

export default GlobalStyle;