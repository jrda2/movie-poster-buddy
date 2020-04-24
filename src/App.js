import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Moviecard from "./Movie.js"
import { Container, Row, Col, Navbar, FormControl, Form, Button } from "react-bootstrap";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const inputEl = useRef();
  const [gridSearch, setgridSearch] = useState("harry%20potter")
  const API_KEY = process.env.REACT_APP_API_KEY;


  useEffect (() => {
    fetch ("https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&language=en-US&query="+ gridSearch)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result.results);
          console.log(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [gridSearch]);


  const handleSearchInput = e => {
    e.preventDefault();
    const val = inputEl.current.value
    setgridSearch(val)
  };

  if (error) {
    return <div>Error" {error.message}</div>;
  } else if (!isLoaded) {
    return <div> Loading...</div>;
  } else {
    return (
      <Container>
        <Navbar className="bg-light justify-content-between">
          <Navbar.Brand href="#home" className="pr-lg-5">Movie Poster Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Form 
              inline className="text-right">
              <FormControl 
              type="text"
              placeholder="Search"
              ref = { inputEl }
              className="mr-sm-2" />
              <Button 
              variant="outline-success" 
              type="submit"
              onClick = {handleSearchInput}
              >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Row>
        {movies.slice(0,9).map(movie => (
          <Col className="movie" xs={8} sm={6} md={4}>
            <Moviecard key={movie.id} title={movie.title} img={movie.poster_path} release_date={movie.release_date} />
          </Col>
        ))}
        </Row>
        </Container> 
    )}
  }


export default App;
