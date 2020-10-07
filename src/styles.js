import styled , { createGlobalStyle } from "styled-components";

const styles = {
    body: { backgroundColor: "#FBFEFC" },
   
    list: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      border:"10%"
    },
  
    text: { textAlign: "center" },
  };


 

export const GlobalStyle = createGlobalStyle`
body { 
  color: ${(props)=> props.theme.mainColor};
  background-color: ${(props)=> props.theme.backgroundColor};
}
`;
  
export const ThemeButton = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: Red;
color: ___CSS_1___;
`;  


export const ThemeButton2 = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: green;
color: ___CSS_1___;
`;  
  
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Liststyle = styled.div`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
 
  width: 50%;
  border-style: solid;;
`;
export const Movie = styled.div`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
 
  width: 80%;
  border-style: solid;;
`;
export const Title = styled.div`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
 
  width: 50%;
 
`;
  export default styles;