/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "../../api/api-service";
import { StyledBackground, StyledButton } from "./index.styles";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export default function index() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { movieId } = useParams();
  const backToHome = () => {
    navigate("/movies");
  };
  useEffect(() => {
    getMovieDetail(movieId).then((resp) => {
      setMovie(resp.data);
      console.log(resp.data);
      console.log(movie.poster_path);
    });
  }, []);

  return (
    <StyledBackground>
      <Container>
        <Row>
          <Col className="col-img" lg={7}>
            <div className="div-img">
              <img
                src={IMG_API + movie.poster_path}
                alt={movie.title}
                className="img"
              />
            </div>
          </Col>

          <Col className="col-details" lg={5}>
            <div className="details">
              <ul>
                <li className="title">
                  <h3>{movie.title}</h3>{" "}
                </li>
                <li>{movie.overview}</li>
                <li>IMDB Vote: {movie.vote_average}</li>
                <li>Release Date: {movie.release_date}</li>
              </ul>
            </div>
            <StyledButton onClick={backToHome}>Back To Home</StyledButton>
          </Col>
        </Row>
      </Container>
    </StyledBackground>
  );
}
