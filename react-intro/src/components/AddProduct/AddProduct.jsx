import React from 'react'
import axios from 'axios'
import './AddProduct.css'

export default function AddProduct() {
    const AddProductAxios = () => {
        if (document.getElementById("title").value === "") {
          alert("Title alanı boş bırakılamaz");
        } else if (document.getElementById("description").value === "") {
          alert("Description alanı boş bırakılamaz");
        } else if (document.getElementById("price").value === "") {
          alert("Price alanı boş bırakılamaz");
        }
      axios.post("https://dummyjson.com/products/add", {
        
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
          price: document.getElementById("price").value,
         
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  return (
    <>

<div className="container">
    <div className="row">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div className="row">
      <label htmlFor="description">Description</label>
      <input type="text" id="description" />
    </div>
    <div className="row">
      <label htmlFor="price">Price</label>
      <input type="number" id="price" />
    </div>
    <br />
    <div className="row">
      <button type="submit" onClick={() => { AddProductAxios() }}>Add</button>
      <br />
      <button type="reset" onClick={() => { window.location.reload() }}>Reset</button>
    </div>
  </div>
    </>
  );
}
