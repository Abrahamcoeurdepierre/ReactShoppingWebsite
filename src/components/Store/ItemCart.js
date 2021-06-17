import React from 'react';
import firebase from 'firebase';

export default function ItemCart({ todo }) {
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Cart').child(todo.id);
        todoRef.remove();
      };

  return (
      <div className="item">
        <div className="right">

            <div className="itemName">
              {todo.Brand}
            </div>

            <div className="itemPrice">
              Price: {todo.Price} Rp
            </div>
            <button onClick={deleteTodo}className="details">Delete</button>
          </div>
        </div>
  );
}