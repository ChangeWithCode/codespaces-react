import { useEffect, useState } from 'react';
import './App.css';
import Testservice from './services/Testservice';

function App() {


  const [id , setId] = useState(1);


  const retrieve = () => {
    Testservice.getAll()
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const test = (id) => {
    Testservice.getProducts(id)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const [currentPage , setcurrentPage] = useState(1);
  const [keyword , setkeyword] = useState("Null");
  const [category , setcategory] = useState("Null");
  const [sitename , setsitename] = useState("Null");
  const testing = () => {
    Testservice.getProductstest(keyword , sitename , category ,currentPage)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() =>
  {

    test(id)

  } , [id])


  return (
    <div className="App">
      <button 
      onClick={() => testing()}
      >Check</button>
    </div>
  );
}

export default App;
