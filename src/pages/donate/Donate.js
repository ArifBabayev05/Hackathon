import React, { useState } from 'react';
import './donate.css';
import DonateCard from '../../components/donateCard/DonateCard';
import t1 from "../../assets/images/t.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";

const Donate = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedTrees, setSelectedTrees] = useState([]);

    const handleIncrementTotalPrice = (price, name) => {
        let found = false;
        const updatedSelectedTrees = selectedTrees.map((tree) => {
            if (tree.name === name) {
                found = true;
                return { ...tree, quantity: tree.quantity + 1 };
            }
            return tree;
        });

        if (!found) {
            updatedSelectedTrees.push({ name, quantity: 1 });
        }

        setTotalPrice(totalPrice + price);
        setSelectedTrees(updatedSelectedTrees);
    };

    const handleDecrementTotalPrice = (price, name) => {
        const updatedSelectedTrees = selectedTrees.map((tree) => {
            if (tree.name === name && tree.quantity > 0) {
                return { ...tree, quantity: tree.quantity - 1 };
            }
            return tree;
        }).filter((tree) => tree.quantity > 0); // Remove trees with quantity 0

        setTotalPrice(totalPrice - price);
        setSelectedTrees(updatedSelectedTrees);
    };


    const handleSelectTree = (name) => {
        const existingTree = selectedTrees.find(tree => tree.name === name);

        if (existingTree) {
            const updatedTrees = selectedTrees.map(tree => {
                if (tree.name === name) {
                    return { ...tree, quantity: tree.quantity + 1 };
                }
                return tree;
            });
            setSelectedTrees(updatedTrees);
        } else {
            setSelectedTrees([...selectedTrees, { name, quantity: 1 }]);
        }
    };

    return (
        <div className='donationPage p-5'>
            <div className='title'>
                <h1>Rooting for a Greener Tomorrow: 100K Trees, One Event, One Earth!</h1>
            </div>
            <div className='row'>
                <div className='col-md-1'>
                    <img src='https://s3-alpha-sig.figma.com/img/f56c/0ade/f4f6ae4b1efd2cc8f3344bfba7920dd9?Expires=1697414400&Signature=cMibSv3qXlEv5V5U8csxaR5KqIccD7nUyyDbLIJbRTMhnqXTOOrHCZ0BC4pqyNBX4fZZy6V8fXt3CE0iP94pzMn3Wu07uIgZiQ5PwqFdaXhs59W8frZ8e6c8RNU9CP8hCP2LYwIyk-~ZfrqDT4rsZDneJPyoUTuHj7bhEK8kCz-pYqn2E9Vcjh23sV~2Tf2ugb4ZLlzGr4jwRe6G-I4SEfkQVAP72W3KYB7fafupfGnPkLOEULWEc0-5HLPZlbrcOodp1aOWXfkzA4ensH9mfbsMM23n0NAAoQ1qyIsQcOzkudPTY5JySOW0WEUeK4aZkUkvF4~5aeH3ozUQfHmS6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        width='50' />
                </div>
                <div className='col-md-9'>
                    Sağlam Düşüncə Gənclər Təşkilatı
                    <p className='text-secondary' style={{ fontSize: "12px" }}>Event</p>
                </div>
            </div>
            {/* Donation Cards */}
            <div className='row justify-content-center'>
                <div className='col-md-4 mb-5'>
                    <DonateCard imageUrl={t1} name="Pine" price={10} onIncrement={handleIncrementTotalPrice} onSelectTree={handleSelectTree} />
                </div>
                <div className='col-md-4 mb-5'>
                    <DonateCard imageUrl={t2} name="Oak" price={9} onIncrement={handleIncrementTotalPrice} onSelectTree={handleSelectTree} />
                </div>
                <div className='col-md-4 mb-5'>
                    <DonateCard imageUrl={t3} name="Maple" price={6} onIncrement={handleIncrementTotalPrice} onSelectTree={handleSelectTree} />
                </div>
                <div className='col-md-4 mb-5'>
                    <DonateCard imageUrl={t4} name="Birch" price={8} onIncrement={handleIncrementTotalPrice} onSelectTree={handleSelectTree} />
                </div>
            </div>
            <div className="checkout-section">
                <div>
                    <h3>Total Price: ${totalPrice}</h3>
                    {selectedTrees.length > 0 && (
                        <div className="selected-trees">
                            {selectedTrees.map((tree, index) => (
                                <div key={index}>{tree.quantity} x {tree.name}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <textarea className="comment-box" placeholder="Add a comment..." />
                </div>
                <button className="checkout-button">Checkout</button>
            </div>

        </div>
    );
};

export default Donate;
