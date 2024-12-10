import axios from 'axios'
import React, { useState } from 'react'

function Api() {
  const [Data, setData] = useState([]);

  // const Click = () => {
  //   axios.get('https://dummyjson.com/quotes').then((res) => {
  //     setData(res.data)
  //     console.log(res.data);
  //   }).catch((err) => {
  //     console.log(err);

  //   });
  const Click = () => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setData(res.data.products)
      console.log(res.data.products[0]);
    }).catch((err) => {
      console.log(err);

    });
  
  }
  const Remove = () =>{
    setData("")
  }
    return (
      <div>
        {Data.map((title) => 
          <ul key={title.id}>
            <li>{title.title}</li>
          </ul> 
        )} 
        <h3>

          {Data.title} 
          {/* {Data.quote} */}
        </h3>
        <button onClick={Click}>GET</button><br />
        <button onClick={Remove}>REMOVE</button>
      </div>
    )
  }

  export default Api