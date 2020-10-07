import React from "react";

import styles from "./styles";
//import cookieList from "./CookieList";


const Item = props => {
    const item = props.item;
    return (
      <div style={styles.item} key={item.id}>
         
          <p style={styles.text}>{item.name}</p>
       
      </div>
    );
}



  export default Item;