import React from "react";

import { Container, Row, Col } from "reactstrap";


import "../../../styles/category.css";

const categoryData = [
  {
    display: "Van Heusen",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnXbnWUHRIkcSaDTlc-nTuHlMs_C_7RotILtLwJkokCGXz3KZqEijoBKNZRQ4jhxCmA8&usqp=CAU",
  },
  {
    display: "Raymond",
    imgUrl: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
  },

  {
    display: "Peter England",
    imgUrl: "https://m.media-amazon.com/images/I/31plk8z0CvL._SL500_.jpg",
  },

  {
    display: "Louis Phillippe",
    imgUrl: "https://m.media-amazon.com/images/I/31plk8z0CvL._SL500_.jpg",
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
