import React from 'react';
import './Cart.css';
import EstateList from '../EstateList';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Cart = (props) => {
    const navigate = useNavigate();

    return (
        <div >
            <Navbar
                setCityFilter={props.setCityFilter}
                setRoomsFilter={props.setRoomsFilter}
                setDescriptionFilter={props.setDescriptionFilter}
                setPriceSortSelect={props.setPriceSortSelect}
                priceSortSelect={props.priceSortSelect}
                isCart={true}
            />
            {props.estateList.length > 0 ?
                <EstateList
                    estateList={props.estateList}
                    handleCartButton={props.handleCartButton}
                    isCart={true}
                /> :
                <div className="empty-cart">
                    <h2>Cart is empty</h2>
                    <p>Go to home page and add some estates to cart</p>
                    <button
                        className='go-home-button'
                        onClick={() => {
                            navigate('/')
                        }
                        }
                    >Go home
                    </button>
                </div>
            }
        </div>
    );
}

export default Cart;