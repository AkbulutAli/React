import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProductDetails(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
<div className="container">
        <div className="col-lg-8 border p-3 main-section bg-white">
          <div className="row hedding m-0 pl-3 pt-0 pb-3">
            <h3>{productDetails.title}</h3>
          </div>
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
              <img src={productDetails.thumbnail} className="border p-3" />
              <span className="sub-img">
            {productDetails.images.map((image, index) => (
              <img key={index} src={image} className="border p-2" alt={`Sub Image ${index + 1}`} />
            ))}
          </span>
            </div>
            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  
                  <div className="col-lg-12">
                    <p className="m-0 p-0 price-pro">${productDetails.price}</p>
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{productDetails.description}</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="col-lg-12">
                    <h6>Quantity :</h6>
                    <input type="number" className="form-control text-center w-100" defaultValue={1} />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="row">
                      <div className="col-lg-6 pb-2">
                        <a href="#" className="btn btn-danger w-100">Add To Cart</a>
                      </div>
                      <div className="col-lg-6">
                        <a href="#" className="btn btn-success w-100">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    
  
    </>
  );
}
