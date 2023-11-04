import { useState, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from "../../Components/Layout"
import { ProductDetail } from '../../Components/ProductDetail';

function Home() {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then( response => response.json())
      .then( data => setItems(data))
  }, [])

    return (
      <Layout>
        <div className='flex justify-center flex-wrap gap-2 w-full max-w-screen-xl'>
          { items?.map( item => (
            <Card 
              key={item.id}
              data={item}
            />
          )) }
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home