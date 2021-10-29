import { useState, useEffect } from "react";
import "./App.css";
import star from "./images/star.png";
import { useHistory } from 'react-router-dom';

const Cart = () => {

    const [items, setItems] = useState(null);
    const selectedItemsBag = [];
    const [selectedItems, setSelectedItems] = useState(selectedItemsBag);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // https://fakestoreapi.com/products?limit=5
    // http://localhost:8000/gifts

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);

    const handleOnChange = (position) => {

        if (!selectedItems.some(item => position === item)) {
            const newSelectedItem = selectedItems.concat(position); 
            setSelectedItems(newSelectedItem);
        }
        else {
            const newSelectedItem = selectedItems.filter(item => position !== item); 
            setSelectedItems(newSelectedItem);
        }
    }

    const handleSubmit = formSubmitEvent => {
        
        formSubmitEvent.preventDefault();
        setIsPending(true);
        
        fetch ('https://fakestoreapi.com/carts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify (
                {
                    userId: 1,
                    date: 2021-10-29,
                    products: selectedItems
                }
            )
        }).then(()=> {
            console.log('successful');
            setIsPending(false);
            history.push('/Thankyou');
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="cart">
                <div className="cart-title">
                    <h1>My Children's Cart</h1>
                    <p>List of my children's cart.</p>
                </div>
                {items && items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-item-desc">
                            <h2>My Child #{item.id}</h2>
                            <h3>{item.title}</h3>
                            <div className="cart-item-desc-status-div">
                                <div className="inline">
                                    <img src={star} alt="star" />
                                </div>
                                <p className="inline cart-item-desc-status"><u>Rating: {item.rating.rate}/5 | {item.rating.count} remaining</u></p>
                            </div>
                            <p className="cart-item-desc-desc">{item.description}</p>
                            <h2 className="cart-item-desc-price">€{item.price}</h2>
                        </div>
                        <div className="cart-item-check">
                            <label className="container">
                                <input type="checkbox" onChange={() => handleOnChange(item.id)} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-approve">
                { !isPending && <button type="submit" className="cart-approve-btn">Approve</button>}
                { isPending && <button type="submit" className="cart-approve-btn" disabled>Saving...</button>}
            </div>
        </form>
    )
}

export default Cart;