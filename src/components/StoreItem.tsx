import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  let quantity = 1;
  return (
    <div>
      <Card>
        <Card.Img
          src={imgUrl}
          variant="top"
          height="200px"
          //This fixes the aspect ratio properly
          style={{ objectFit: "cover" }}
        ></Card.Img>
        <Card.Body className="d-flex flex-column">
          {/* justify-content-between this maintains each at one end
             align-items-baseline, this makes, Book and 10.99 have same bottom postion
          */}
          <Card.Title className="d-flex justify-content-between mb-4 align-items-baseline">
            <span className="fs-2">{name}</span>
            <span className="text-muted ms-2">{formatCurrency(price)}</span>
          </Card.Title>
          {/* mt-auto is margin-top auto, this means
            this div is pushed to bottom of card, and takes up
            auto space, i.e adjusts to whatever is remaining
          */}
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100">+ Add to cart</Button>
            ) : (
              <div
                style={{ gap: "0.5rem" }}
                className="d-flex flex-column align-items-center"
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button>-</Button>
                  <div>
                    {/* You can use <span> to wrap inline-level elements,
                    in order to apply styling or behavior to just that portion of the content: */}
                    <span className="fs-3">{quantity} </span> in cart
                  </div>
                  <Button>+</Button>
                </div>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
