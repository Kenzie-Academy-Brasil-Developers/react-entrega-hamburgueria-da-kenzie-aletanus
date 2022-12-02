import styled from "styled-components";

export const StyledHeader = styled.header`

     position: relative;
     background-color: var(--grey-0);
     display: flex;
     align-items: center;
     flex-direction: column;
     padding: var(--unit-14);
     gap: var(--unit-12);

     form {
          width: 100%;
     }

     form > input {
          width: 100%;
     }
     
    @media (min-width: 1024px){
          
          flex-direction: row;
          justify-content: space-between;
          padding: var(--unit-16) 10%;

          form {
               width: 30%;
          }
     }

     @media (min-width: 2000px){

          padding: var(--unit-16) 15%;
     }

     @media (min-width: 2700px){

          padding: var(--unit-16) 18%;
     }
     
`;