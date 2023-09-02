import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import items from "../data/items.json";
import { formatCurrency } from "../utilities/FormatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((item) => item.id === id);
  if (!item) return null;
  return (
    <div>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        {/* objectFit: "cover" to ensure the image fits the 
        specified dimensions while maintaining its aspect ratio. */}
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        ></img>
        <div className="me-auto">
          <div>
            {item.name}{" "}
            <span className="text-muted" style={{ fontSize: "0.7rem" }}>
              x {quantity}
            </span>
          </div>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        {/* In HTML, the &times; entity represents the multiplication sign (×)
         */}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    </div>
  );
}
