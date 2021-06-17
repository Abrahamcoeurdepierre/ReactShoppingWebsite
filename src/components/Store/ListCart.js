import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Todo from './ItemCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {
   
    Link,
    
  } from "react-router-dom";

export default function ListCart() {
  const [todoList, setTodoList] = useState();

  const PayCart = () => {
    const todoRef = firebase.database().ref('Cart');
    todoRef.remove();
}   

  useEffect(() => {
    const todoRef = firebase.database().ref('Cart');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  return (
    
    <div>
        <Navbar></Navbar>
    <div class = "mt-4">
        {todoList
            ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
            : ''}
        <Link  to = "/Success"><button onClick={PayCart}>Proceed To Payment</button></Link>
        
    </div>
       
    </div>
    
  );
}