import styled from "styled-components";

export const StyledForm = styled.form`
 
  background-color: var(--white);
  border: solid 2px var(--grey-20);
  border-radius: var(--radius-2);
  display: flex;
  padding: var(--unit-12);

  input {
    border: none;
  }

  input::placeholder {
    color: var(--grey-20);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-16);
    font-weight: var(--font-weight-4);
    line-height: var(--font-line-height-1);
  }
  
`;