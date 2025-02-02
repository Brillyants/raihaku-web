import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/img/hero-img.png";
import { useEffect, useState } from "react";
import "../style/Hero.css";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState("");
  const toRotate = ["Supported!", "Donated!", "Closer!"];
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  };
  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">RAIHAKU</span>
            <h1>
              <span className="purple-text text-semibold">Stream </span>{" "}
              <span className="text-regular">Freely</span>,
              <br />
              <span className="purple-text text-semibold">Get </span>
              <span className="text-regular">{text}</span>
            </h1>
            <p>
              Raihaku hadir buat kamu yang ingin tetap dekat dengan komunitas.
              Terima dukungan dari penonton dengan cara yang simpel dan seru,
              biar bisa terus berkarya tanpa batas!
            </p>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="hero-img-container">
              <img src={heroImg} alt="Hero Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
