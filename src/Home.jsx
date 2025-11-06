import React, { useEffect, useState } from 'react'
import "./App.css"

function Home() {
   var [data, setData] = useState([])
   var [cart, setCart] = useState([])

  async function fetchData() {
     var result = await fetch("https://fakestoreapi.com/products")
     var myResult = await result.json()
    setData(myResult)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function addToCart(myItem) {
    var existingItem = cart.find(cartItem => cartItem.id === myItem.id)
    if (!existingItem) {
      setCart([...cart, myItem])
    } else {
      alert("⚠️ Item already exists in the cart!")
    }
  }

  function removeCart(myItem) {
    var newCart = cart.filter(item => item.id !== myItem.id)
    setCart(newCart)
  }

  var totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="home-container">
      <h1 className="home-title">🛍️ Product Store</h1>

      <div className="product-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">₹ {item.price}</p>
            <button className="buy-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="signup-card" style={{ marginTop: "50px" }}>
        <h1>🛒 Cart ({cart.length})</h1>
        <h2 style={{ color: "#16a34a", marginBottom: "15px" }}>
          Total: ₹ {totalPrice.toFixed(2)}
        </h2>

        {cart.length === 0 ? (
          <p style={{ color: "#777" }}>Your cart is empty</p>
        ) : (
          <div className="product-grid">
            {cart.map((item) => (
              <div className="product-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
                <h2 className="product-title">{item.title}</h2>
                <p className="product-price">₹ {item.price}</p>
                <button
                  className="buy-btn"
                  style={{ background: "#ef4444" }}
                  onClick={() => removeCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
