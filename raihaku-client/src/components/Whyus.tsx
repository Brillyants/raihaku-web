import { Container, Row, Col } from "react-bootstrap";
import GradientCircle from "./Shapes/GradientCircle";
import GradientSquare from "./Shapes/GradientRoundedSquare";
import CommunityImg from "../assets/img/Community.png";
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
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientCircle imageUrl={CommunityImg} ></GradientCircle>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientCircle imageUrl={CommunityImg} ></GradientCircle>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientCircle imageUrl={CommunityImg} ></GradientCircle>
                    </Col>
                </Row>
                <Row className="negative-margin align-items-center">
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientSquare>
                            <h3 className="mx-2 mt-4">Benefits</h3>
                            <p className="mx-4">Support creators with Text, Sound, 
                                and Video Donations, making every interaction 
                                unique and exciting.
                            </p>
                        </GradientSquare>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientSquare>
                            <h3 className="mx-2 mt-4">Benefits</h3>
                            <p className="mx-4">Support creators with Text, Sound, 
                                and Video Donations, making every interaction 
                                unique and exciting.
                            </p>
                        </GradientSquare>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <GradientSquare>
                            <h3 className="mx-2 mt-4">Benefits</h3>
                            <p className="mx-4">Support creators with Text, Sound, 
                                and Video Donations, making every interaction 
                                unique and exciting.
                            </p>
                        </GradientSquare>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default whyus;
