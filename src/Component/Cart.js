import React, { useEffect, useState } from "react";
import DisplayContent from "./DisplayContent";
import './Cart.css'
function Cart({ cart, setCart }) {
    const [total, setTotal] = useState();
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart]);
    return (
        <div>
            <div className="cart-value">
                <div className="cart"> <h2>My Cart</h2></div>
                <div className="price"><p>My Cart Value: Rs {total}</p></div>
            </div>
            <div className="cart-display">
                {cart.map((product) => {
                    return <div className="cart-view"><ul><DisplayContent product={product} cart={cart} setCart={setCart}
                        Price={product.price}
                        image={product.image}
                        Name={product.Name} />
                    </ul>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Cart;