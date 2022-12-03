import styled from "styled-components";

export const StyledCartProduct = styled.li`
  
  background-color: var(--grey-0);
  display: flex;
  padding: var(--unit-20) 0;
  justify-content: space-between;

  picture {
    background-color: var(--grey-20);
    border-radius: var(--radius-2);
    height: 70px;
    width: 70px;
  }

  picture > img {
    height: 100%;
    width: 100%;
  }

  span {
    width: 95px;
  }

  span > h2 {
    color: var(--grey-100);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-18);
    font-weight: var(--font-weight-7);
    line-height: var(--font-line-height-1);
    white-space: break-spaces;
  }

  span > p {
    color: var(--grey-50);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-12);
    font-weight: var(--font-weight-4);
    line-height: var(--font-line-height-1);
  }

  button {
    background-color: var(--grey-0);
    border: solid 1px var(--grey-0);
    cursor: pointer;
    color: var(--color_secondary);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-14);
    font-weight: var(--font-weight-5);
    line-height: var(--font-line-height-1);
    text-decoration-line: none;
    padding: 0 0 0 0;

    &:hover {
        color: var(--grey-100);
        background-color: var(--grey-0);
        border: solid 1px var(--grey-0);
    }
  }
  
`;