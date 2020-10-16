import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from "react-material-ui-carousel";
import Carousel1 from "../img/carousel1.jpg";
import Carousel3 from "../img/carousel3.jpg";

export default function Carouselmain(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  //   var items = [
  //     {
  //       name: "Random Name #1",
  //       description: "Probably the most random thing you have ever seen!",
  //       backgroundimage: Carousel1,
  //     },
  //     {
  //       name: "Random Name #2",
  //       description: "Hello World!",
  //       backgroundimage: Carousel3,
  //     },
  //   ];
  //   return (
  //     <Carousel>
  //       {items.map((item, i) => (
  //         <Carouselitem key={i} item={item} />
  //       ))}
  //     </Carousel>
  //   );
}
