import styled from "styled-components";

export const StyledFooter = styled.footer`

     background-color: var(--grey-0);
     display: flex;
     align-items: center;
     flex-direction: column;
     padding: var(--unit-14);
     gap: var(--unit-12);
     position: absolute;
     width: 100%;
     margin-top: 410px;

     .titile-mobile-a {
          display: flex;
          font-family: var(--font-family-1);
          font-size: var(--unit-rem-10);
          font-weight: var(--font-weight-7);
          line-height: var(--font-line-height-1);
     }

     .titile-mobile-b {
          color: var(--color_secondary);
          display: flex;
          font-family: var(--font-family-1);
          font-size: var(--unit-rem-10);
          font-weight: var(--font-weight-7);
          line-height: var(--font-line-height-1);
          margin: 0 0  0 4px;
          white-space: nowrap;
     }

     h1 {
          display: none;
     }

     span {
          display: none;
     }

     @media (min-width: 620px){
          .titile-mobile-a {
               display: none;
          }

          .titile-mobile-b {
               display: none;
          }

          h1 {
               color: var(--grey-50);
               display: flex;
               font-family: var(--font-family-1);
               font-size: var(--unit-rem-12);
               font-weight: var(--font-weight-6);
               line-height: var(--font-line-height-1);
          }

          span {
               color: var(--color_secondary);
               display: flex;
               font-family: var(--font-family-1);
               font-size: var(--unit-rem-12);
               font-weight: var(--font-weight-6);
               line-height: var(--font-line-height-1);
               margin: 0 4px;
               white-space: nowrap;
          }

     }

    @media (min-width: 1024px){
          
          justify-content: space-between;
          margin-top: var(--unit-40);
          padding: var(--unit-16) 10%;
          margin-top: -12px;

     }

     @media (min-width: 2000px){

          padding: var(--unit-16) 15%;
     }

     @media (min-width: 2700px){

          padding: var(--unit-16) 18%;
     }
     
`;