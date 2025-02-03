import { Container, Row, Col } from "react-bootstrap";
import CommunityImg from "../assets/img/Community.png";
import "../style/Whyus.css";

const Whyus = () => {
    return (
        <section className="whyus" id="whyus">
            <Container>
                <Row className="text-center mb-5">
                    <Col xs={12} sm={12} md={12} lg={12}> {/* Full width for all screen sizes */}
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
                <Row className="d-flex align-items-center">
                    <Col className="card-cols d-flex justify-content-center align-items-center">
                        <div className="card-container ">
                            <Row className="align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-circle-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                            <clipPath id="circleClip">
                                                <circle className="clip-circle" />
                                            </clipPath>
                                        </defs>
                                        <circle className="circle-bg" stroke="url(#gradientStroke)" />
                                        <image className="circle-image" href={CommunityImg} clipPath="url(#circleClip)" />
                                    </svg>
                                </Col>
                            </Row>
                            <Row className="negative-margin align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-rect-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                        </defs>
                                        <rect className="custom-rect" stroke="url(#gradientStroke)" />
                                        <foreignObject className="custom-content-container justify-content-center align-items-center">
                                            <div className="custom-content">
                                                <h3 className="mx-2 mt-4">Benefits</h3>
                                                <p className="mx-5">
                                                    Support creators with Text, Sound, and Video Donations, making every interaction unique and exciting.
                                                </p>
                                            </div>
                                        </foreignObject>
                                    </svg>
                                </Col> 
                            </Row>
                        </div>
                        <div className="card-container ">
                            <Row className="align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-circle-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                            <clipPath id="circleClip">
                                                <circle className="clip-circle" />
                                            </clipPath>
                                        </defs>
                                        <circle className="circle-bg" stroke="url(#gradientStroke)" />
                                        <image className="circle-image" href={CommunityImg} clipPath="url(#circleClip)" />
                                    </svg>
                                </Col>
                            </Row>
                            <Row className="negative-margin align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-rect-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                        </defs>
                                        <rect className="custom-rect" stroke="url(#gradientStroke)" />
                                        <foreignObject className="custom-content-container">
                                            <div className="custom-content">
                                                <h3 className="mx-2 mt-4">Benefits</h3>
                                                <p className="mx-5">
                                                    Support creators with Text, Sound, and Video Donations, making every interaction unique and exciting.
                                                </p>
                                            </div>
                                        </foreignObject>
                                    </svg>
                                </Col> 
                            </Row>
                        </div>
                        <div className="card-container ">
                            <Row className="align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-circle-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                            <clipPath id="circleClip">
                                                <circle className="clip-circle" />
                                            </clipPath>
                                        </defs>
                                        <circle className="circle-bg" stroke="url(#gradientStroke)" />
                                        <image className="circle-image" href={CommunityImg} clipPath="url(#circleClip)" />
                                    </svg>
                                </Col>
                            </Row>
                            <Row className="negative-margin align-items-center">
                                <Col className="d-flex justify-content-center align-items-center">
                                    <svg className="custom-rect-svg" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradientStroke" className="gradient-direction">
                                                <stop offset="0%" className="gradient-stop-start" />
                                                <stop offset="100%" className="gradient-stop-end" />
                                            </linearGradient>
                                        </defs>
                                        <rect className="custom-rect" stroke="url(#gradientStroke)" />
                                        <foreignObject className="custom-content-container">
                                            <div className="custom-content">
                                                <h3 className="mx-2 mt-4">Benefits</h3>
                                                <p className="mx-5">
                                                    Support creators with Text, Sound, and Video Donations, making every interaction unique and exciting.
                                                </p>
                                            </div>
                                        </foreignObject>
                                    </svg>
                                </Col> 
                            </Row>
                        </div>
                    </Col>
                </Row>      
            </Container>
        </section>
    );
};

export default Whyus;
