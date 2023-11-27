import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineAliwangwang,
  AiOutlineHome,
  AiFillForward,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const array = [1, 2, 3, 4, 5];
const newarray = [7, 8, 9, 10];

const mergeArray = [array, newarray]; // [ [1, 2, 3, 4, 5], [7, 8, 9, 10] ];
const merge2Array = [...array, ...newarray]; // [1, 2, 3, 4, 5, 7, 8, 9, 10]

const MainMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link as={Link} to="/">
        <AiOutlineHome /> Home
      </Nav.Link>
      <Nav.Link as={Link} to="/courses">
        <AiFillForward /> Courses
      </Nav.Link>
      <Nav.Link as={Link} to="/events">
        <AiOutlineCalendar /> Events
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        <AiOutlineInfoCircle /> About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        <AiOutlineAliwangwang /> Contact
      </Nav.Link>
      <Nav.Link as={Link} to="/payment">
        Payment
      </Nav.Link>
    </Nav>
  );
};

export default MainMenu;
