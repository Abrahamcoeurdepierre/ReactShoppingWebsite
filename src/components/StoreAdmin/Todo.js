import React from 'react';
import firebase from 'firebase';


export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Shoes').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Shoes').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
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

            <button onClick={deleteTodo}className="details">Delete</button>
          </div>
        </div>
  );
}