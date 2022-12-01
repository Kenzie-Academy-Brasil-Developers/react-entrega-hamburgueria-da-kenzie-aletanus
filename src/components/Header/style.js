import styled from "styled-components";

export const StyledHeader = styled.header`

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

   /* display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 450px) {      
        grid-template-columns: 1fr;      
   } */
`;