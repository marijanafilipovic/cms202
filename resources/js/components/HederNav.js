import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter, Link} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import PostList from "./posts-listing.component";
import CreatePost from "./create-post.component";
import EditPost from "./edit-post.component";
import ReactDOM from "react-dom";
import Example from "./Example";
import {Nav} from "react-bootstrap";

function HeaderNav() {

    return (

        <div>
            <Navbar bg="success" variant="success">
                <Container>

                    <Navbar.Brand>
                        <Link to={"/create-expense"} className="nav-link">
                            Expense manager
                        </Link>
                    </Navbar.Brand>

                    <Nav className="justify-content-end">
                        <Nav>
                            <a href="/create-post">Nova objava</a>
                           {/* <Link to={"/create-post"} className="nav-link">
                                Create Post
                            </Link>*/}
                            {/*<Link to={"/posts-listing"} className="nav-link">
                                Posts List
                            </Link>*/}
                        </Nav>
                    </Nav>

                </Container>
            </Navbar>
        </div>

       /*
            <div className="">
                <header className="App-header">
                    <Navbar bg="success" variant="success">
                        <Container>

                            <Navbar.Brand>
                                <Link to={"/create-expense"} className="nav-link">
                                    Expense manager
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-post"} className="nav-link">
                                        Create Post
                                    </Link>
                                    <Link to={"/posts-listing"} className="nav-link">
                                        Posts List
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

                                    <Route exact path='/' component={CreatePost} />

                                    <Route path="/create-post" component={CreatePost} />
                                    <Route path="/edit-post/:id" component={EditPost} />
                                    <Route path="/posts-listing" component={PostList} />
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BrowserRouter>*/
    );
}
export default HeaderNav;
if (document.getElementById('header')) {
    ReactDOM.render(<HeaderNav />, document.getElementById('header'));
}
