import styled from "styled-components";
import { darken } from "polished";

export const FooterContainer = styled.footer`
position: absolute;
bottom: 0;
right: 0;
left: 0;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
padding: 2rem;
gap: 0.5rem;

  span {
    color: ${({theme}) => theme.colors.buttonDeleteTask};    
    transition: filter 0.2s;
      a:hover {
        filter: drop-shadow(0px 5px 5px ${({theme}) => theme.colors.borderColor});
        filter: -webkit-drop-shadow(0px 5px 5px ${({theme}) => theme.colors.borderColor});
        filter: -moz-drop-shadow(0px 5px 5px ${({theme}) => theme.colors.borderColor});
        transition: color 0.2s;
      }
  }

   

`