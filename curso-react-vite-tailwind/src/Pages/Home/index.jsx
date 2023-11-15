import { useState, useEffect, useContext } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from "../../Components/Layout"
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const { items,
    setItems,
    searchByTitle,
    setSearchByTitle,
    filtereditems,
  } = useContext(ShoppingCartContext);

  const renderView = () => {
    if( searchByTitle?.length > 0 ) {
      if(filtereditems?.length > 0) {
        return (
          filtereditems?.map( item => (
            <Card 
              key={item.id}
              data={item}
            />
          ))
        )

      } else {
        return (
          <h2>We don't have anything to show!</h2>
        )
      }
    } else {
      return (
        items?.map( item => (
          <Card 
            key={item.id}
            data={item}
          />
        ))
      )
    }
  }



    return (
      <Layout>
        <div className="">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>

        <input 
          type="text" 
          placeholder='Search a product...' 
          className='rounded-lg border border-black w-80 py-2 px-4 my-2 focus:outline-none'
          onChange={(event) => setSearchByTitle(event.target.value) }
        />

        <div className='flex justify-center flex-wrap gap-2 w-full max-w-screen-xl'>
          { renderView() }
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home