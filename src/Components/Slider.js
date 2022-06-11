import React from "react";
import { Carousel } from "react-bootstrap";
import q from '../img/q.jpg';
import w from '../img/w.jpg';
import e from '../img/e.jpg';

export default function Slider(){
    return(
        <Carousel>
            <Carousel.Item style={{'height': '800px'}}>
                <img
                    className="d-block w-100"
                    src={q}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Apple</h3>
                    <p>Founded in April 1, 1976 </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '800px'}}>
                <img
                    className="d-block w-100"
                    src={w}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Apple</h3>
                    <p>Founded in April 1, 1976</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '800px'}}>
                <img
                    className="d-block w-100"
                    src={e}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Apple</h3>
                    <p>Founded in April 1, 1976</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

} 