import styled from "styled-components";

export const StyledCart = styled.div`

  footer {
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    gap: var(--unit-16);
    padding: var(--unit-16) var(--unit-16) var(--unit-20) var(--unit-16);
    width: 365px;
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

  /* display: flex;
  flex-direction: row; */

  /* header {
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
  } */

  /* footer > div {
    position: absolute;
    top: var(--unit-rem-64);
    left: 0px;
  } */

  /* footer > div > h2 {
    color: black;
    height: 100px;
    width: 365px;
  } */

  /* background-color: var(--color_primary);
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
  } */
  
`;