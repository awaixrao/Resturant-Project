import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {

    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    const params = useParams()

    useEffect(() => {
        axios(`https://6666db46a2f8516ff7a54492.mockapi.io/Categories/${params.id}`).then((res) => {
            setProduct(res.data)

        }).catch(() => {

        }).finally(() => {
            setLoader(false)
        })
    }, [])


    return (
        <>

            <section className='productDetail'>
                <h1 className="categoriesHeading text-center py-5">Product Detail</h1>
                <div className="container">

                    {
                        (loader == true) ? (
                            <div className='text-center mt-5'>
                                <div className="spinner-border text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>

                            </div>
                        ) : <div className="card mb-3 product-detail-card rounded-0">
                            <div className="row g-0">
                                <div className="col-md-4 card-4">
                                    <img src={product.image} style={{ height: 300 }} className="img-fluid rounded-start p-4" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body card-8 p-5">
                                        <h5 className="card-title text-white pb-4">{product.title}</h5>
                                        <p className="card-text text-white py-4">
                                            {product.description}
                                        </p>
                                        <h4 className='text-white'>{product.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }



                </div>
            </section>


        </>
    )
}

export default ProductDetail