import styled from "styled-components";

export const StyledCart = styled.aside`

  color: var(--white);
  font-family: var(--font-family-1);
  font-size: var(--unit-rem-18);
  font-weight: var(--font-weight-7);
  height: var(--unit-rem-64);
  width: 296px;
  line-height: var(--font-line-height-1);
  white-space: nowrap;
  margin: var(--unit-20) 0 0 var(--unit-12);

  .h2-title {
    border-radius: var(--radius-2) var(--radius-2) 0 0;
    display: flex;
    align-items: center;
    background-color: var(--color_primary);
    color: var(--white);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-18);
    font-weight: var(--font-weight-7);
    height: var(--unit-rem-64);
    line-height: var(--font-line-height-1);
    padding-left: var(--unit-20);
  }
  
  ul {
    max-height: 280px;
    /* overflow-x: hidden; */
    overflow-y: auto;
    overflow-x: hidden;
  }

  .li-empty-cart {
    border-radius: var(--radius-2);
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px 0 40px;
    width: 100%;
  }

  .li-empty-cart > h2 {
    display: flex;
    justify-content: center;
    color: var(--grey-100);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-18);
    font-weight: var(--font-weight-7);
    line-height: var(--font-line-height-1);
    width: 100%;
  }

  .li-empty-cart > p {
    display: flex;
    justify-content: center;
    color: var(--grey-100);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-12);
    font-weight: var(--font-weight-4);
    line-height: var(--font-line-height-1);
    width: 100%;
  }

  footer {
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    gap: var(--unit-16);
    padding: var(--unit-16) var(--unit-16) var(--unit-20) var(--unit-16);
  }

  footer > span {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  footer > span > h2 {
    color: var(--grey-100);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-14);
    font-weight: var(--font-weight-6);
    line-height: var(--font-line-height-1);
  }

  footer > span > p {
    color: var(--grey-50);
    font-family: var(--font-family-1);
    font-size: var(--unit-rem-14);
    font-weight: var(--font-weight-6);
    line-height: var(--font-line-height-1);
  }
  
  @media (min-width: 1440px){

    width: 25%;

    ul {
      max-height: 520px;
    }

  }

  @media (min-width: 2100px){

    width: 360px;
  }

`;