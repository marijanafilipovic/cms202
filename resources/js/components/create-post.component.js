import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import PostList from './posts-listing.component';
import Swal from "sweetalert2";


 export default  class CreatePost extends Component {
     constructor(props) {
        super(props);
        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostPrice = this.onChangePostPrice.bind(this);
        this.onChangePostDescription = this.onChangePostDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        // Setting up state
        this.state = {
            title: '',
            description: '',
            price: ''
        }
    }
    onChangePostTitle(e){
        this.setState({title: e.target.value})
    }
    onChangePostDescription(e){
        this.setState({description: e.target.value})
    }
    onChangePostPrice(e){
        this.setState({price: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const post = {

            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        };
        axios.post('http://localhost:8000/api/posts', post,  {
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => console.log(res.data));

   Swal.fire(
            'Proizvod je upisan',
            'Odlicno',
            'success'
        );
        this.setState({name: '', description:'', price: '' })
    }
    render(){
        return(<div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="Title">
                                <Form.Label>Naziv</Form.Label>
                                <Form.Control type="text" value={this.state.title} onChange={this.onChangePostTitle}/>
                            </Form.Group>

                        </Col>

                        <Col>
                            <Form.Group controlId="Description">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control type="textarea" value={this.state.description} onChange={this.onChangePostDescription}/>
                            </Form.Group>
                        </Col>
                    </Row>


                    <Form.Group controlId="description">
                        <Form.Label>Cena</Form.Label>
                        <Form.Control type="number" value={this.state.price} onChange={this.onChangePostPrice}/>
                    </Form.Group>


                    <Button variant="primary" size="lg" block="block" type="submit">
                        Dodaj Proizvod
                    </Button>
                </Form>
                <br></br>
                <br></br>

                <PostList> </PostList>
            </div>
            );
    }

}
