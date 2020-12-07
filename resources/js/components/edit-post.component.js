import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPost extends Component {

    constructor(props) {
        super(props)
        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostPrice = this.onChangePostPrice.bind(this);
        this.onChangePostDescription = this.onChangePostDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        // State
        this.state = {
            title: '',
            price: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/posts/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.title,
                    amount: res.data.description,
                    description: res.data.price
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangePostTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangePostDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangePostPrice(e) {
        this.setState({ price: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const expenseObject = {
            title: this.state.title,
            price: this.state.price,
            description: this.state.description
        };

        axios.put('http://localhost:8000/api/posts/' + this.props.match.params.id, expenseObject)
            .then((res) => {
                console.log(res.data)
                console.log('Post successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Expense List
        this.props.history.push('/posts-listing')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={this.onChangePostTitle} />
                </Form.Group>

                <Form.Group controlId="Price">
                    <Form.Label>Cena</Form.Label>
                    <Form.Control type="number" value={this.state.price} onChange={this.onChangePostPrice} />
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.onChangeExpenseDescription} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Expense
                </Button>
            </Form>
        </div>);
    }
}
