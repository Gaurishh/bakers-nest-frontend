import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions.js';
import Brownie from '../components/Brownie.js';
import TubCake from '../components/TubCake.js';
import DryCake from '../components/DryCake.js';
import CheeseCake from '../components/CheeseCake.js';
import JumboCookie from '../components/JumboCookie.js';
import Fudge from '../components/Fudge.js';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js';
import Filter from "../components/Filter.js";
import Navbar from '../components/Navbar.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const productsState = useSelector(state => state.getAllProductsReducer);
  const {products, error, loading} = productsState;
  AOS.init()

  useEffect(()=>{
    dispatch(getAllProducts())
  }, []);

  return (
    <div className="App">
        <Navbar />
        <div className='row justify-content-center'>
            {loading ? (<Loading />) : error ? (<Error error="Something went wrong" />) : (
              <>
                <Filter />
                {products.map(product => {
                  return product.show && <div className='col-md-3 m-3' key={product._id} data-aos='fade-down'>
                      {product.category === "Brownies" ? <div> <Brownie brownie={product}/> </div> : null}
                      {product.category === "Tub Cake" ? <div> <TubCake tubCake={product}/> </div> : null}
                      {product.category === "Dry Cake" ? <div> <DryCake dryCake={product}/> </div> : null}
                      {product.category === "Cheese Cake" ? <div> <CheeseCake cheeseCake={product}/> </div> : null}
                      {product.category === "Jumbo Cookie" ? <div> <JumboCookie jumboCookie={product}/> </div> : null}
                      {product.category === "Fudge" ? <div> <Fudge fudge={product}/> </div> : null}
                  </div>
                })}
              </>
              )}
        </div>
    </div>
  )
}

export default HomeScreen