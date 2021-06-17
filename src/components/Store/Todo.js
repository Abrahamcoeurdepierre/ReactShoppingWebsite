import React from 'react';
import firebase from 'firebase';

export default function Todo({ todo }) {
 
  const addToCart = () => {
    const todoRef = firebase.database().ref('Cart');
    const cartPush = {
        Brand: todo.Brand,
        Price: todo.Price,
    };

    todoRef.push(cartPush); 

  }

  return (
      <div className="item">

        <div className="left">
            <img src={todo.Image}
                height={350}
                width={390}/>
        </div>

        <div className="right">

            <div className="itemName">
              {todo.Brand}
            </div>

            <div className="itemPrice">
              Price:{todo.Price} Rp
            </div>

            <div className="itemStok">
              {todo.Description}
            </div>

            <button onClick={addToCart} className="details">Add To Cart</button>
          </div>
        </div>
  );
}