import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./stars/Gray";
import Selected from "./stars/Selected";
import Hover from "./stars/Hover";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 48px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row-reverse;
  margin-top: 12px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 58px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 95%;
  }

  textarea {
    width: 100%;
    min-heigth: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;
const Wrapper = styled.div`
  background: #fff;
  padding: 20px;
  background: #000;
  height: 100vh;
  padding-top: 100px;
`;
const SubmitBtn = styled.div`
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 96%;
  margin-top: 20px;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;

const Headline = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weigth: bold;
  color: #fff;
`;

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weigth: bold;
`;

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          checked={props.review.score == score}
          onChange={() => console.log("onChange")}
          name="rating"
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Have an experience with {props.attributes.name}? Share your review!
        </Headline>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Airline</RatingTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
