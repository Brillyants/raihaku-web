import { Container, Row, Col } from "react-bootstrap";
import GradientCircle from "./Shapes/GradientCircle";
import CommunityImage from './assets/img/Community.png';
import "../style/Whyus.css";

const whyus = () => {
    return (
        <section className="whyus" id="whyus">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Why Raihaku?</h2>
                        <p>
                        Raihaku membuat mendukung kreator menjadi menyenangkan dan mudah dengan 
                        Donasi Teks, Suara, dan Video, Papan Peringkat, Hadiah Donatur, dan 
                        Langganan. Tetap anonim atau dapatkan pengakuan—pilihan ada di 
                        tangan Anda! Dengan berbagai pilihan metode pembayaran, mendonasi 
                        kini lebih mudah dari sebelumnya.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <GradientCircle imageUrl="/assets/img/Community.png" ></GradientCircle>
                    </Col>
                    <Col>
                        <div className="circle bg-primary rounded-circle"></div>
                    </Col>
                    <Col>
                        <div className="circle bg-primary rounded-circle"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default whyus;
