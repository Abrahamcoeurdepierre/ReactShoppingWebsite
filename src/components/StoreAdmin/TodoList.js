import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './item.css';
import { Link, useHistory } from "react-router-dom"
import Navbar from './Navbar';




export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Shoes');
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
      <Navbar />
      <div class="w-100 text-center mt-3 mb-4">
            <Link to="/AddItem"> <button>Add Item</button></Link>
      </div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ''}
    </div>
  );
}