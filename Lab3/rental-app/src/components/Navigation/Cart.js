import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import EstateList from '../EstateList';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const navigate = useNavigate();

    return (
        <div className="cart">
            {props.estateList.length > 0 ?
                <EstateList estateList={props.estateList} /> :
                <div className="empty-cart">
                    <h2>Cart is empty</h2>
                    <p>Go to home page and add some estates to cart</p>
                    <button
                        className='go-home-button'
                        onClick={() => {
                            navigate('/')
                        }
                        }>Go home</button>
                </div>
            }
        </div>
    );
}

export default Cart;