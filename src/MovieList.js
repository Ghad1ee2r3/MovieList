import React from "react";

// Styling
import styles from "./styles";

// Data
import list from "./watchlist";

import Item from "./Item";


//<CookieModal isOpen={isOpen} closeModal={closeModal} />

//const [isOpen, setIsOpen] = useState(true);
//  const closeModal = () => setIsOpen(false);

//const openModal = () => setIsOpen(true);
const movieList = () => {
     let movieList = list.map((item) => (
       <Item item={item} key={item.id} />
 ));
 
    return (
     <div style={styles.list}>
       {/* {cookieList} */}
        <div>{movieList}</div> 
     </div>
    );
 };

 export default movieList;




  