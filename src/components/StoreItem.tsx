import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <div>
      <Card>
        <Card.Img
          src={imgUrl}
          variant="top"
          height="200px"
          style={{ objectFit: "cover" }}
        ></Card.Img>
      </Card>
    </div>
  );
}
