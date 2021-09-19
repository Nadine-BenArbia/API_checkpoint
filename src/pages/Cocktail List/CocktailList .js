import axios from 'axios';
import React, { useEffect, useState } from 'react'
import coktailCard from '../../componenets/cocktailCard/coktailCard';

 const Cocktail_List  = () => {
      const [drinks,setDrinks] = useState([]);
      const [loading,setloading]=useState(false);
      const [isError,setisError]=useState(false);
    useEffect (()=>{
        getCocktail_List();
    },[]);
    
    const  getCocktail_List =async()=>{
        
      //const result= await 
      //setloading(true);
      // axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      //.then((res)=>setDrinks(res.data)).catch((err)=> console.log(err));
      try {
          setloading(true);
          const result= await axios.get (
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
              );
          setDrinks(result.data.drinks)
          setloading(false);
      } catch(error){
          console.log(error);
          setisError(true);
      }
      
    };
    
    return (
        
        <div>
           {loading ? (
           <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F449726712791261583%2F&psig=AOvVaw14xbMLDNmv6i6riNLnTA4i&ust=1631726342780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj6rr38_vICFQAAAAAdAAAAABAU'alt="loading"/>)
           :isError ?
           (<h1>error</h1>
            ):(
            drinks.map((el)=> <coktailCard el={el.strDrink} key={el}/>)
             )}
            </div>
    );
};
export default Cocktail_List