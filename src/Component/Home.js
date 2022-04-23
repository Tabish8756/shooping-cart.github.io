import React, { useState } from "react";
import faker from 'faker';
import DisplayContent from "./DisplayContent";
import './Home.css'
faker.seed(100);
function Home({cart, setCart}){
    const productDetails=[...Array(4)].map(()=>({
        id :faker.datatype.uuid(),
        Name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),


    }));
    const [productsData]=useState(productDetails);
    console.log(cart);
  
  
    return(
        <div className="home">
            {productsData.map((product)=>{
               return <DisplayContent image={product.image}
               product={product}
               Price={product.price}
               Name={product.Name}
               cart={cart}
               setCart={setCart} />

            })}
         
        </div>
    )
}
export default Home;