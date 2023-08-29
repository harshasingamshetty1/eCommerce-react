import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} lg={3} xs={1}>
        {storeItems.map((item) => (
          <Col key={item.id}>{<StoreItem {...item} />}</Col>
        ))}
      </Row>
    </>
  );
}
