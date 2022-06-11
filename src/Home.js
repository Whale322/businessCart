import React from "react";
import {Card, Container, Row, Col, Button, Modal} from "react-bootstrap";
import Slider from './Components/Slider';
import q from './img/q.jpg';


export const Home = () => ( 
    <>
    <Slider/>

    <Container style={{paddingTop: '2rem', paddingBottom: '2rem', }}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={q}/>
                    <Card.Body>
                        <Card.Title>Apple Computer Company</Card.Title>
                        <Card.Text>Apple was founded as Apple Computer Company
                             on April 1, 1976, by Steve Jobs, Steve Wozniak and
                            Ronald Wayne to develop and sell Wozniak's Apple I
                             personal computer.</Card.Text>                       
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={q}/>
                    <Card.Body>
                        <Card.Title>Steve Jobs</Card.Title>
                        <Card.Text>Steven Paul Jobs 
                            (February 24, 1955 – October 5, 2011)
                             was an American entrepreneur, inventor,
                              business magnate, media
                              proprietor, and investor.</Card.Text>                       
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={q}/>
                    <Card.Body>
                        <Card.Title>Over $1 trillion</Card.Title>
                        <Card.Text>Apple became the first publicly
                             traded U.S. company to be valued at over
                              $1 trillion in August 2018, then $2 trillion
                               in August 2020, and most recently $3 trillion
                                in January 2022.</Card.Text>                       
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    <Container style={{marginBottom: '30px', marginTop: '30px'}}>
        <Row>
            <Col md={7}>
                <img src={q} height={300}/>         
            </Col>
            <Col md={5}>
                <h2>Apple</h2>
                <p>Apple Inc. is an American multinational technology company that specializes
                    in consumer electronics, software and online services headquartered in Cupertino,
                    California, United States. Apple is the largest information technology company by
                    revenue (totaling US$365.8 billion in 2021) and as of May 2022, it is the world's
                    second most valuable company,[7] the fourth-largest personal computer vendor by unit
                    sales and second-largest mobile phone manufacturer. It is one of the Big Five
                    American information technology companies, alongside Alphabet, Amazon, Meta, and
                    Microsoft.</p>
            </Col>
        </Row>
    </Container>
    </>
)