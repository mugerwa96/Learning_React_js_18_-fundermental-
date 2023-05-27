import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  image1 from '../image/bananas.png';
import  image2 from '../image/coco.png';
const Product = () => {
    const [products, setProducts] = useState([
        {
            id:1,
            title:"Bananas",
            thumbnail:image1,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  ',
            price:2000


        },
        {
            id:2,
            title:"Ipone 2",
            thumbnail:image2,
            description:'Lorem ipsum sit amet consectetur adipisicing elit.',
            price:2000


        }
    
    ]);

    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //         .then((response) => {
    //             setProducts(response.data.products);
    //         })
    //         .catch((error) => {
    //             console.log('Error in fetching data using axios')
    //         })
    // }, [])
    return (
        <div>
            <p className='font-bold text-xl'>Product</p>
            <div className='grid mx-auto md:grid-cols-2 gap-2 w-full'>
                {


                    products.length > 0 ?
                 
                       products.map((product) => (

                        <div className='rounded overflow-hidden mb-3  bg-slate-300 w-[16rem]' key={product.key}>
                            <img src={product.thumbnail} className='h-24' />
                            <div className='p-2 space-y-2'>
                                <p><small className='font-bold'>Name:</small> <br />    {product.title}</p>
                                <p><small className='font-bold'>Product Description</small><br />:{product.description}</p>
                                <p><small className='font-bold'>Price</small>:${product.price}</p>
                                <button className='p-2 bg-slate-700 font-bold rounded text-xs text-white'>Add 2 Cart</button>
                            </div>
                        </div>

                    ))
                    : <div>
                    <p className='font-bold rounded  bg-red-500 w-full text-white text-sm  text-center p-1    '>Loading please wait .......</p>
                </div>


                }
            </div>
        </div>
    )
}

export default Product
