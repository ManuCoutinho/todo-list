import styled, { css } from 'styled-components'
import emptyImg from '/assets/404.svg'

export const Container = styled.section`
  ${() => css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    gap: 2rem;
    background: url(${emptyImg}) no-repeat;
    background-size: cover;
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    color: #f09cb1;

    p {
      padding-top: 5rem;
    }
  `}
`
