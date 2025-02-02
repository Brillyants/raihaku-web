import { Container, Row, Col } from "react-bootstrap";
import danaLogo from "../assets/img/dana-logo.png";
import gopayLogo from "../assets/img/gopay-logo.png";
import linkajaLogo from "../assets/img/linkaja-logo.png";
import ovoLogo from "../assets/img/ovo-logo.png";
import qrisLogo from "../assets/img/qris-logo.png";
import "../style/EWallet.css";

const EWallet = () => {
  return (
    <section className="ewallet">
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="p-0">
                  <img src={qrisLogo} alt="QRIS" />
                </Col>
                <Col className="ewallet-name text-semibold p-0">QRIS</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="p-0">
                  <img src={gopayLogo} alt="QRIS" />
                </Col>
                <Col className="ewallet-name text-semibold p-0">GOPAY</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="p-0">
                  <img src={ovoLogo} alt="QRIS" />
                </Col>
                <Col className="ewallet-name text-semibold p-0">OVO</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="p-0">
                  <img src={danaLogo} alt="QRIS" />
                </Col>
                <Col className="ewallet-name text-semibold p-0">DANA</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row className="d-flex align-items-center">
                <Col className="p-0">
                  <img src={linkajaLogo} alt="QRIS" />
                </Col>
                <Col className="ewallet-name text-semibold p-0">LINK AJA</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EWallet;
