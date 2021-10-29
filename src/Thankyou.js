import { useState, useEffect } from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';

const Thankyou = () => {

    const [items, setItems] = useState(null);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/user/1')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setItems(data);
                console.log(data);
            })
    }, []);

    return (
        <div className="cart">
            <div className="cart-title">
                <h2>Thank you!</h2>
                <p>List of approved/discarded items from my children's cart.</p>
            </div>
            <div className="cart-sub-title">
                <h4>Approved Items</h4>
            </div>
            {items && items.map((item) => (
                <div className="cart-item-thankyou" key={item.id}>
                    <div className="cart-item-img">
                        (image)
                        <img src="" alt="" />
                    </div>
                    <div className="cart-item-desc">
                        <h3>Item #{item.id}</h3>
                        <p className="cart-item-desc-desc">(desc)</p>
                        <p className="cart-item-desc-desc">(quantity)</p>
                    </div>
                </div>
            ))}
            <div className="cart-sub-title">
                <h4>Discarded Items</h4>
            </div>
            {items && items.map((item) => (
                <div className="cart-item-thankyou" key={item.id}>
                    <div className="cart-item-img">
                        (image)
                        <img src="" alt="" />
                    </div>
                    <div className="cart-item-desc">
                        <h3>Item #{item.id}</h3>
                        <p className="cart-item-desc-desc">(desc)</p>
                        <p className="cart-item-desc-desc">(quantity)</p>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Thankyou;