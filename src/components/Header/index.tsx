import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import logoImg from '../../assets/logo.svg'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

import * as S from './styles'
interface Props {
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext)
  const Icon = theme.title === 'dark' ? RiMoonClearLine : RiSunLine
  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <img src={logoImg} alt='Logo To Do' width='90' aria-label='logo' />
        <S.Switch
          aria-label='alterar tema'
          role='switch'
          aria-checked={theme.title === 'dark'}
          onClick={toggleTheme}
        >
          <Icon />
        </S.Switch>
      </S.Wrapper>
    </S.HeaderContainer>
  )
}
