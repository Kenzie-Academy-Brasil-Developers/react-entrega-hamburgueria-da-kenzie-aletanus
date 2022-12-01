import styled from "styled-components";

export const StyledAside = styled.aside`
 
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--color_primary);
    color: var(--white);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-18);
    font-weight: var(--font-weight-7);
    height: var(--unit-rem-64);
    width: 365px;
    line-height: var(--font-line-height-1);
    padding-left: var(--unit-24);
    text-decoration-line: none;
    white-space: nowrap;
    margin: var(--unit-20) 0 0 var(--unit-12);
  
    div {
        position: absolute;
        top: var(--unit-rem-64);
        left: 0px;
    }

    @media (min-width: 1690px) {
        width: 707px;


    }

`;