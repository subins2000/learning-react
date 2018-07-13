import axios from 'axios';
import React, { Component } from 'react';

import { isLoggedIn, userStore } from '../store.js';
import Header from './partial/Header.js';
import NotFound from './NotFound.js';


class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNotFound: false,
        }

        if (this.props.match.params.slug) {
            this.slug = this.props.match.params.slug;
        } else {
            this.setState({
                isNotFound: true,
            });
        }

        this.getBookInfo = this.getBookInfo.bind(this);
        this.getBookInfo();
    }

    getBookInfo() {
        var $this = this;

        axios.get('/api/book/' + this.slug).then(function(r) {

        }).catch(function(e) {

        });
    }

    render() {
        return this.state.isNotFound ? <NotFound /> : (
            <div>
                <Header/>
                <div className="container" id="content">
                    <h2>{this.state.title}</h2>
                </div>
            </div>
        );
    }
}

export default Book;
