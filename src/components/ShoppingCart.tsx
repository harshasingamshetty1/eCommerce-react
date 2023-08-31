import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

export function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  return (
    <div>
      {/* the offcanva is directly from bootstrap, it gives that cool animation,
        and a side panel  which we have put to right side
        
        we are setting the state of isOpen to false by calling the closeCart.
        Or else, the cart will never close, bcoz, isopen will always be true 
        and hence show property will always be true
        */}

      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
