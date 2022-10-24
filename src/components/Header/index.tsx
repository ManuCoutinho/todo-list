import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import logoImg from '../../assets/logo.svg'
import moonIcon from '../../assets/moon.svg'
import sunIcon from '../../assets/sun.svg'

import { HeaderContainer } from './styles'

interface Props {
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext)

  const label = { inputProps: { 'aria-label': 'Alterar o tema' } }

  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} alt='Logo To Do' width='90' aria-label='logo' />
        {/* <button 
              {...label}
              checked={theme.title === 'dark'}
              onChange={toggleTheme}           
          /> */}
      </div>
    </HeaderContainer>
  )
}
