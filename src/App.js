import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import SearchBar from './components/Search';
import ProductContainer from './components/ProductsContainer';
import SelectedProduct from './components/SelectedProduct'


const App=()=> {  
  const [isLoggedIn,setIsLoggedIn]=useState(false);  
  const [searchTerm, setSearchTerm] = useState('');
  const [products,setProducts]=useState([]);
  const [selectedProduct,setSelectedProduct]=useState({})
  useEffect(()=>{
    (async ()=>{
      const {data}=await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    })()
  },[])
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {
        isLoggedIn?(
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
            <div style={{display:'flex'}}>
              <ProductContainer searchTerm={searchTerm} products={products} setSelectedProduct={setSelectedProduct}/>
              <SelectedProduct selectedProduct={selectedProduct} />
            </div>
          </>
        ):null
      }
    </div>
  );
}

export default App;
