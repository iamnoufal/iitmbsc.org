import { Carousel } from "react-bootstrap";
import "./Carousel.css"
import "bootstrap";

const CarouselElement = (list) => {
  list = list['list'];
  return (
    <Carousel className="mx-lg-5 px-lg-5 w-auto" fade>
      {list.map((imgURL) => {
        return (
          <Carousel.Item key={list.indexOf(imgURL)}>
            <img
              className="d-block w-100"
              src={imgURL}
              alt=""
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default CarouselElement;