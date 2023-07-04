import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Mug_Pro, ProductList, Shoes_Pro } from "../data/ProductList";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Mug.css";
import { AppContext } from "../../components/AppContext";
import { useContext } from "react";
import Filter from "../filter/Filter";
import { Link } from "react-router-dom";
export default function Mug() {
  const { handleAddProduct, datafilter } = useContext(AppContext);
  return (
    <div>
      <Header />
      <h2 className="title">Mug</h2>
      <div className="newarrival_product" data-aos="fade-up">
        {Mug_Pro.map((item) => (
          <CardGroup className="new" key={item.id}>
            <Card className="new_card">
              <Card.Body>
                <Link to={`/mug/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="newarrival_card"
                  />
                </Link>

                <Card.Text>{item.title}</Card.Text>
                <Card.Title>${item.price}</Card.Title>
              </Card.Body>
              {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
            {/* <div className="btn">
              <button onClick={() => handleAddProduct(item.id)}>Buy now</button>
            </div> */}
          </CardGroup>
        ))}
      </div>
      <Footer />
    </div>
  );
}
