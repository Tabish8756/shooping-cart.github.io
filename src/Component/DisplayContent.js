import './Display.css'
const DisplayContent=({Price, image, Name, cart, setCart, product})=>{
    return(
        <div className='main-display'>
        <div className="display">
            <img src={image}/>
            <div className="data">
            <p>{Name}</p>
                <h4>Rs {Price}</h4>
                <div className='button-show'>
        {cart.includes(product)?(
          
            <button className='button' onClick={()=>{
                setCart(cart.filter((c)=>c.id !==product.id))
            }}>Remove from Cart</button>
        ) :(
            <button className='button' onClick={()=>{
                setCart([...cart, product])
            }}>Add to Cart</button>
            
        )}
      
                 
            </div>
        </div>
        </div>
     
         </div>
    )
}
export default DisplayContent;