import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PostList from "./components/posts-listing.component";
import CreatePost from "./components/create-post.component";

function App() {
    return (<Router>
        <div className="App">
            <header className="App-header">
                <Navbar bg="light" variant="success">
                    <Container>


                            <Link to={"/post-listing"} className="nav-link">
                                SVI PROIZVODI
                            </Link>


                        <Nav className="justify-content-end">
                            <Nav>
{/*
                                <a href={'/post-listing'}>POSTOVI</a>
*/}
                                  <Link to={"/create-post"} className="nav-link">
                                    NOV PROIZVOD
                                </Link>
                            </Nav>
                        </Nav>

                    </Container>
                </Navbar>
            </header>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                            <Switch>
                                <Route path="/post-listing" component={PostList} />
                                <Route path="/create-post" component={CreatePost} />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>);
}

export default App;
