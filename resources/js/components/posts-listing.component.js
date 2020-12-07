import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PostTableRow from "./PostTableRow";
import ReactDOM from "react-dom";
import Example from "./Example";


export default class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/posts/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.posts.map((res, i) => {
            return <PostTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Cena</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }

}




if (document.getElementById('example')) {
    ReactDOM.render(<PostList />, document.getElementById('example'));
}
