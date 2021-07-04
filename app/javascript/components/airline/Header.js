import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 30px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-wight: bold;
  padding: 10px 0;
  font-size: 18px;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.legth;

  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <TotalReviews>{total} User Reviews</TotalReviews>
      <div className="startRating"></div>
      <TotalOutOf>{avg_score} out of 5</TotalOutOf>
    </Wrapper>
  );
};

export default Header;
