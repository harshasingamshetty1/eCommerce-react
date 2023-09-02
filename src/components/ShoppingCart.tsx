import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/FormatCurrency";
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
          <Stack gap={5}>
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
            {/* ms-auto means, start margin auto
            therfore, pushed to as right as possible
            samething for mt-auto, means pushed to as botom as possible
          */}
            <div className="ms-auto fw-bold fs-5">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
