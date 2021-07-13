import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardMedia, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function Product({ title, image, id, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    toast("Added item to basket!");
  };

  return (
    <Card className="product">
      <CardMedia >
        <img src={image} alt="" />
      </CardMedia>
      <CardContent className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </CardContent>
      <CardActions>
      <Button onClick={addToBasket} style={{background: "#ff8008"
    }}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Product;
