/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import 'bootstrap/dist/css/bootstrap.css';
require('./bootstrap');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//require('./components/Example');
//require('./components/MyBook');

import {BrowserRouter  as Router} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
    document.getElementById("header")
);

/*

<React.StrictMode>
    <App />
</React.StrictMode>,*/