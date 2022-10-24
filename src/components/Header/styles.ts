import styled, { css } from 'styled-components'
import bannerImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  @media (max-width: 37.5em) {
    width: 100%;
    padding-top: 7rem;
  }

  background: url(${bannerImg}) no-repeat;
  background-size: cover;
  padding-top: 10rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 60vw;
  margin: 0 auto;
  padding: 1rem 1rem 13rem;
  gap: 1rem;
`
export const Switch = styled.button`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.25rem 0.3rem;
    outline: 0;
    border-radius: 50%;
    border: 2px solid ${theme.colors.checkboxTask};
    background: ${theme.colors.backgroundInput};
    font-size: 1.65rem;
    color: ${theme.colors.textPrimary};
  `}
`
