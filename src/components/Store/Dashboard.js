import React, {useState} from 'react';
import Navbar from './Navbar';
import firebase from 'firebase'
import TodoList from './TodoList'


const Dashboard = () => {
    const[title, setTitle] = useState('')

    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };
    const createToDo = () => {
        const todoRef = firebase.database().ref('Cart');
        const todo = {
            Brand: title,
            Price: false,
        };

        todoRef.push(todo); 
    }
    return (
        <div>
            <Navbar />
            <TodoList />
        </div>
    );
}

export default Dashboard;
