import styled from "styled-components";

export const StyledDivProducts = styled.div`
    
    display: flex;
    flex-direction: column;
   
    @media (min-width: 1440px) {
        flex-direction: row;
        /* display: grid; */
        /* grid-template-columns: repeat(2,1fr); */
        gap: 2rem;
        padding: var(--unit-16) 10%;
    }
`;

export const StyledUl = styled.ul`
    
    display: flex;
    overflow-x: scroll;
    padding: var(--unit-20) 0;
    align-items: flex-start;

    li {
        border: solid 1px var(--grey-20);
        border-radius: var(--radius-2);
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        margin: 0 var(--unit-12);
        min-width: 300px;
    }

    li > picture {
        background-color: var(--grey-0);
        display: flex;
        width: 100%;
        height: 150px;
        overflow: hidden;
        justify-content: space-evenly;
        align-content: center;
    }

    li > picture > img {
        height: 100%;
    }

    li > div {
        display: flex;
        gap: var(--unit-12);
        flex-direction: column;
        padding: var(--unit-20);
    }

    li > div > h3 {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
    }

    li > div > .productCategory {
        color: var(--grey-300);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);
    }

    li > div > .productPrice {
        color: var(--color_primary);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-6);
        line-height: var(--font-line-height-1);
    }

    @media (min-width: 1440px){

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-x: hidden;
    
        /* display: grid;
        grid-template-columns: repeat(3, 1fr); */
        /* padding: var(--unit-16) 10%; */
        
        li {
            margin-bottom: 2%;
            width: 30%;
        }

        li > div {
        display: flex;
        align-items: flex-start;
    }
    }
  
`;