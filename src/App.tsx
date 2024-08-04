import { useEffect, useState } from 'react';
import './App.css';
import { Text, MenuItem, AppImage, Product } from './components';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  votes: number;
  image: string;
  available: boolean;
  popular: boolean;
}

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      .then(response => response.data)
      .then(data => setProducts(data))
      .catch(error => console.log(error))
  }, [])
  
  const handleAvailable = () => {
    setAvailable(!available)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className="App-section">
        <header className='App-title'>
          <div>
            <AppImage className="App-title-image" src="./vector.svg" alt="Product Image" />
            <Text className="App-title-text">Our Collection</Text>
          </div>
          <Text className="App-description-text">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</Text>
        </header>
        <section className="App-menu"> 
          <MenuItem className="App-menu-item">
            <Text className="App-menu-product">All Products</Text>
            <Text className="App-menu-available">Available Now</Text>
          </MenuItem> 
        </section>
        <section className="App-product-list">

          <section className="App-product-item">
            {products.map((product) => <Product key={product.id} productName={product.name} productPrice={product.price} productRating={product.rating} productVotes={product.votes} productImage={product.image} available={product.available} popular={product.popular}/>)}
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
