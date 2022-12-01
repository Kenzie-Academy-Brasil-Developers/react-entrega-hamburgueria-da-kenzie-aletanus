import React from "react"
import { StyledButton } from "./style";

export const Button = ({onClick, id, name, type}) => {
  return (
    <StyledButton onClick={onClick} id={id} type={type} >{name}</StyledButton>
  )
}