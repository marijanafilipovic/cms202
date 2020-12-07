import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from "sweetalert2";

export default class PostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost() {
        axios.delete('http://localhost:8000/api/posts/' + this.props.obj.id)
            .then((res) => {
                console.log('Post removed deleted!')

            }).catch((error) => {
            console.log(error)
        })
        /* REFRESH LIST AFTER DELETE */
        /*axios.get('http://localhost:8000/api/posts/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })*/
        Swal.fire(
            'Proizvod je ',
            'Obrisan',
            'success'
        );
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.description}</td>
                <td>
                  {/*  <Link className="edit-link" to={"/edit-post/" + this.props.obj.id}>
                        <Button size="sm" variant="info">Edit</Button>
                    </Link>*/}
                    <Button onClick={this.deletePost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
