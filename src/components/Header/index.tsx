import { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

import logoImg from "../../assets/logo.svg";

import {HeaderContainer} from "./styles"

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext);
  
  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} 
          alt="Logo To Do" 
          width="90"           
          aria-label="logo"        
          />
       <label aria-label="switch theme" htmlFor="switchTheme">
        <Switch
            id="switchTheme"            
            onChange={toggleTheme}
            checked={theme.title === "light"}
            onColor={theme.colors.checkboxTask}
            offColor={theme.colors.mainBackground}
            offHandleColor={theme.colors.checkboxTask}
            onHandleColor={theme.colors.textDefault}
            height={25}
            width={62}
            handleDiameter={30}
            uncheckedIcon={
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 3,
                }}
              >
                <WiDaySunny />
              </span>
            }
            checkedIcon={
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 2,
                  paddingBottom: 2,
                }}
              >
                <FiMoon />
              </span>
            }
            />
       </label>
      </div>           
    </HeaderContainer>
  )
}