import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3'>
      <Container>
      <h1>ProShop Ecommerce PlateForm</h1>
      <HomeScreen/>
      </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
