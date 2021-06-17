import React, {useState} from 'react';
import Navbar from './Navbar';
import firebase from 'firebase'
import { Link, useHistory } from "react-router-dom"


const AddItem = () => {
    const[brand, setbrand] = useState('')
    const[price, setPrice] = useState('')
    const[description, setDescription] = useState('')
    const[imageLink, setImg] = useState('')

    const handleOnChangeBrand = (e) =>{
        setbrand(e.target.value);
    };

    const handleOnChangePrice = (e) =>{
        setPrice(e.target.value);
    };
    const handleOnChangeDesc = (e) =>{
        setDescription(e.target.value);
    };
    const handleOnChangeImg = (e) =>{
        setImg(e.target.value);
    };
    const createToDo = () => {
        const todoRef = firebase.database().ref('Shoes');
        const todo = {
            Brand: brand,
            Price: price,
            Description:description,
            Image: imageLink,
        };

        todoRef.push(todo); 
    }
    return (
        <div>
            <Navbar></Navbar>

            
            <form>
                <div class="form-row">
                <div class="form-group col-md-6 m-2">
                    <label>Brand</label>
                    <input type="text" onChange={handleOnChangeBrand} value = {brand} placeholder="Please enter the Brand" class="form-control"/>
                </div>

                <div class="form-group col-md-6 m-2">
                    <label>Price</label>
                    <input type="text" onChange={handleOnChangePrice} value = {price} placeholder="Please enter the Price" class="form-control"/>
                </div>
                </div>

                <div class="form-group col-md-8 m-2">
                    <label>Description</label>
                    <input type="text" onChange={handleOnChangeDesc} value = {description} placeholder="Please enter the Description" class="form-control"/>
                </div>
                <div class="form-group col-md-8 m-2">
                    <label>Image Link</label>
                    <input type="text" onChange={handleOnChangeImg} value = {imageLink} placeholder="Please enter the Image Link" class="form-control"/>
                </div>
                </form>
                <Link to="/DashboardAdmin">
                    <button onClick={createToDo} type="submit"  class="m-2"  >Add New Item</button>
                </Link>
                

        </div>
    );
}

export default AddItem;
