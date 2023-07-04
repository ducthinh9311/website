import Form from "react-bootstrap/Form";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <Header />
      <h2 className="title">Contact us</h2>
      <div className="contact_content">
        <p>
          Please contact us using the form below or via email at
          customer@rycustomgift.com. We generally respond within 24-48 hours of
          your inquiry. Please check our FAQ page and/ or Terms Page before
          contacting us in regards to general questions. If you have a product
          question, please see if the product description has the information
          before emailing us. If you have a question about your receiving your
          tracking number, please be sure it has been 3-5 business days after
          you've ordered as that is the general processing time. If you have a
          question about switching items or others related to shipment, PLEASE
          provide us with an order number. <br></br>Thank you rycustomgift Team
        </p>
      </div>
      <Form className="contact_container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Footer />
    </>
  );
}
