import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Switch, styled } from "@mui/material";
import { shade }  from "polished";

import logoImg from "../../assets/logo.svg";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.svg";

import {HeaderContainer} from "./styles"

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext);
  
  const SwitchTheme = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 9,
    '& .MuiSwitch-switchBase': {
      backgroundColor: theme.colors.mainBackground,
      margin: 1,
      padding: 0,
      transform: 'translateX(5px)',
      '&.Mui-checked': { 
        color: theme.colors.mainBackground,     
        transform: 'translateX(26px)',
        '& .MuiSwitch-thumb:before': {          
          backgroundImage: `url(${moonIcon})`,
          backgroundSize: '70%', 
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: shade(0.3, theme.colors.checkboxTask),         
        },
      },
    },
    '& .MuiSwitch-thumb': {      
      backgroundColor: theme.title === 'dark' ? "#EBEBEB": "#FFF",         
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${sunIcon})`,
        backgroundSize: '70%',                       
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.colors.textDefault,
        borderRadius: 20/2,   
      },          
  }));

  const label = { inputProps: { 'aria-label': 'Alterar o tema' } };

  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} 
          alt="Logo To Do" 
          width="90"           
          aria-label="logo"        
          />
          <SwitchTheme 
              {...label}
              checked={theme.title === 'dark'}
              onChange={toggleTheme}           
          />
      </div>           
    </HeaderContainer>
  )
}