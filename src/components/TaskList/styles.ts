import styled from "styled-components";

export const TaskContainer = styled.section`
  max-width: 60vw;
  margin: -12rem auto 0;
  padding: 70px 60px;
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



export const TaskHeader = styled.div `
  display: flex;
  align-items: center;  
  flex-direction: row;
  justify-content: space-between;
    h2 {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 2.25em;
    }
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input {
    display: flex;
    align-items: center;    
    flex: 1;
    background: ${({ theme }) => theme.colors.backgroundInput};
    border: 0;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 0.75rem 1.5rem;
    outline: 0;
    width: 100%;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }  
  `


export const ButtonCreateTask = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.buttonCreateTask};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};  
  font-weight: 600;
  padding: 0.875rem;
  outline: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
    transition: all 0.2s;
  }
  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`

export const TaskListContainer = styled.main`
  margin-top: 3rem;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;     
      border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundInput};
      padding: 1rem 0;      
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      outline: 0;
    
      p {
        font-size: 1em;
        color: ${({ theme }) => theme.colors.textSecondary};
      }
    
      &.completed {
        p {
          text-decoration: line-through;
          opacity: 0.6;
        }
      }  
    }
  }
`


export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 0.875rem;
  margin-bottom: 1.125rem;  

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

  &:checked {
    & ~ span {
      background-color: ${({ theme }) => theme.colors.checkboxTask};
      transform: scale(1.0);
      transition: all 0.2s;
    }

    & ~ span:after {
      display: block;
    }
  }
} 
`


export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 2px;
  transition: transform 0.2s;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 3px;
    height: 6px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

export const DeleteButton = styled.button` 
  background: transparent;
  border: 0;
  outline: 0;
    svg {
      color: ${({ theme }) => theme.colors.buttonDeleteTask};
    }

    &:hover {
      svg {
        filter: brightness(0.5);
      }
    }  
`