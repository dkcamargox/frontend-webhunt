import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Product extends Component{
    state = {
        product:{ }
    };
    async componentDidMount() {

        const { id } = this.props.match.params;
        
        const response = await api.get(`products/${id}`);

        this.setState({
            product: response.data
        })
    }
    
    render() {
        const { product } = this.state;
        return (
            <div className="productInfo">
                <article>
                <h1>{product.title}</h1>
                <p> {product.description}</p>
                <p> URL: <a href={product.url} rel="noopener noreferrer" target="_blank"> {product.url} </a></p>
                </article>
                <Link to='/' className="voltar">Voltar</Link>
            </div>
            
        );
    }
}
