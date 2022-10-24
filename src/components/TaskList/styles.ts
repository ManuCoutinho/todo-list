import styled, { css } from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textMuted};
  padding: 1rem 0;
`
export const TaskListContainer = styled.main`
  margin-top: 3rem;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  outline: 0;
`

export const ItemTitle = styled.label<{ completed: boolean }>`
  ${({ theme, completed }) => css`
    font-size: 1rem;
    color: ${theme.colors.textSecondary};
    text-decoration: ${completed && 'line-through'};
    opacity: ${completed && `0.6`};
  `}
`
export const TaskContainer = styled.section`
  @media (max-width: 37.5em) {
    width: 100%;
    padding: 4rem 1.85rem;
  }

  width: min(60vw, 80%);
  margin: -12rem auto 0;
  padding: 4.375rem 3.75rem;
  position: relative;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  -moz-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${({ theme }) => theme.colors.glassColor};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: 16px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

export const TaskHeader = styled.div`
  @media (max-width: 50em) {
    flex-direction: column;
    margin: 0 auto;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
`
export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.25em;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ButtonCreateTask = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.buttonCreateTask};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 0.875rem;
  outline: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
    transition: all 0.2s;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`
export const Input = styled.input`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundInput};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.75rem 1.5rem;
  outline: 0;
  flex-grow: 1;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 0.875rem;
  margin-bottom: 1.125rem;
`

export const Task = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0.5rem;
  width: 0.5rem;

  &:checked {
    & ~ span {
      background-color: ${({ theme }) => theme.colors.checkboxTask};
      transform: scale(1);
      transition: all 0.2s;
    }

    & ~ span:after {
      display: block;
    }
  }
`
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 2px;
  transition: transform 0.2s;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.8);
    transition: filter 0.2s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 4px;
    width: 4px;
    height: 6px;
    border: solid ${({ theme }) => theme.colors.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  transition: filter 0.2s ease-in-out;
  svg {
    color: ${({ theme }) => theme.colors.buttonDeleteTask};
  }

  &:hover {
    svg {
      filter: brightness(0.5);
      transition: filter 0.2s ease-in-out;
    }
  }
`
