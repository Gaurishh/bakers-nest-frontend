import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {user, isAuthenticated, logout, isLoading, loginWithRedirect} = useAuth0();

  const cartState = useSelector((state) => state.cartReducer);

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded navbar-font">
        <a style={{textDecoration: "none", color: "black"}} href="/shop">
          <img className="navbar-logo " src="https://i.imgur.com/o3dRG0z.jpg" />
          Baker's Nest
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {isLoading ? <div className="text-center ms-auto">Loading...</div> : <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <div className="dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user["given_name"]}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/shop/orders">
                    Orders
                  </a>
                  <a className="dropdown-item" href="/shop" onClick={()=>{logout()}}>
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/shop" onClick={() => loginWithRedirect()}>
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/shop/cart">
                Cart {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>}
      </nav>
    </div>
  );
};

export default Navbar;
