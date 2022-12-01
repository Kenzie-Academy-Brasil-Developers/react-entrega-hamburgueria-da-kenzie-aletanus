import styled from "styled-components";

export const StyledButton = styled.button`
 
  background-color: var(--color_primary);
  border: solid 1px var(--color_primary);
  border-radius: var(--radius-2);
  cursor: pointer;
  color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-1);
  font-size: var(--unit-rem-14);
  font-weight: var(--font-weight-5);
  height: var(--unit-40);
  line-height: var(--font-line-height-1);
  padding: var(--unit-12) var(--unit-20);
  text-decoration-line: none;
  white-space: nowrap;

  &:hover {
    background-color: var(--color_primary-opacity);
    border: solid 1px var(--color_primary-opacity);
  }
  
`;