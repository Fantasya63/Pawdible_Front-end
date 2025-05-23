import React, { useState } from "react";
import "./AddNewItem.css";
import NavBar from "../../Components/NavBar/NavBar";

const AddNewItem = () => {
  const [productName, setProductName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ingredientsImage, setIngredientsImage] = useState(null);

  return (
    <div className="add-new-item-container">
      <div className="page-content">
        <div className="page-header">
          Add New Product
        </div>
        <div className="page-body">
          <input
            className="product-input"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          {/* Image Label */}
          <label className="image-label">Background Image</label>
          <div className="upload-box">
            <input
              type="file"
              onChange={(e) =>
                setBackgroundImage(URL.createObjectURL(e.target.files[0]))
              }
            />
            {backgroundImage ? (
              <img src={backgroundImage} alt="Background" />
            ) : (
              <div className="upload-placeholder">
                <span>📤</span>
                <p>Please upload an Image</p>
              </div>
            )}
          </div>

          <label className="image-label">Ingredients Image</label>
          <div className="upload-box">
            <input
              type="file"
              onChange={(e) =>
                setIngredientsImage(URL.createObjectURL(e.target.files[0]))
              }
            />
            {ingredientsImage ? (
              <img src={ingredientsImage} alt="Ingredients" />
            ) : (
              <div className="upload-placeholder">
                <span>📤</span>
                <p>Please upload an Image</p>
              </div>
            )}
          </div>

          <button className="submit-button">Submit</button>

        </div>
      </div>
      <NavBar
        current="history"
        routes={{
          account: "/account",
          scan: "/scan",
          history: "/history",
        }}
      />
      {/* <h1>Add New Item</h1>

      

      <label className="image-label">Background Image</label>
      <div className="upload-box">
        <input
          type="file"
          onChange={(e) =>
            setBackgroundImage(URL.createObjectURL(e.target.files[0]))
          }
        />
        {backgroundImage ? (
          <img src={backgroundImage} alt="Background" />
        ) : (
          <div className="upload-placeholder">
            <span>📤</span>
            <p>Please upload an Image</p>
          </div>
        )}
      </div>

      <label className="image-label">Ingredients Image</label>
      <div className="upload-box">
        <input
          type="file"
          onChange={(e) =>
            setIngredientsImage(URL.createObjectURL(e.target.files[0]))
          }
        />
        {ingredientsImage ? (
          <img src={ingredientsImage} alt="Ingredients" />
        ) : (
          <div className="upload-placeholder">
            <span>📤</span>
            <p>Please upload an Image</p>
          </div>
        )}
      </div>
      <button className="submit-button">Submit</button>
      <NavBar
        current="history"
        routes={{
          account: "/account",
          scan: "/scan",
          history: "/history",
        }}
      /> */}
    </div>
  );
};

export default AddNewItem;
