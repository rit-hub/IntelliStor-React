import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/navbar";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Showerhead",
      explanation: "The best showerhead on the market by far.",
      pictureLink:
        "https://images-na.ssl-images-amazon.com/images/I/61mcFyb%2BWHL._AC_SL1000_.jpg",
      starRating: 4.5,
      price: 40, // in €
    },
    {
      id: 1,
      name: "Water Pistol",
      explanation:
        "Want to have some fun in the waterpark? Shoot your friends with this harmless water pistol",
      pictureLink:
        "https://images-na.ssl-images-amazon.com/images/I/71Z4ghV0o5L._AC_SY355_.jpg",
      starRating: 4.5,
      price: 30, // in €
    },
    {
      id: 1,
      name: "Inflatable Pool",
      explanation: "An amazing and fun pool for you to get your feet wet in.",
      pictureLink:
        "data:image/jpeg;base64,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",
      starRating: 4.5,
      price: 500, // in €
    },
  ]);

  return (
    <div className="App">
      <AppNavbar />
      <Container className="mt-5">
        <h1>Our Products:</h1>
        <div className="items_row">
          {items.map((item) => (
            <Items
              id={item.id}
              name={item.name}
              explanation={item.explanation}
              pictureLink={item.pictureLink}
              starRating={item.starRating}
              price={item.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
