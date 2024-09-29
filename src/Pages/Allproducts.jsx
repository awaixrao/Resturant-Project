import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"





const Allproducts = () => {

    const [getCategories, setGetCategories] = useState([])

    const params = useParams()

    useEffect(() => {

      // Categories == All Products (url)

      let url = ('https://6666db46a2f8516ff7a54492.mockapi.io/Categories')

      if (params.id){
        url = `${url}?category=${params.id}`
      }

        axios.get(url).then((res) => {
            setGetCategories(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        })

    }, [])


    return (
        <>

            <section className="categories_section">

                <div className="container">
                    <h1 className="categoriesHeading text-center py-5">All Products</h1>

                    <div className="row">
                        {
                            getCategories.map((product, index) => {
                                return (
                                    <>
                                        <div className="col-md-3" key={index}>


                                            <Link to={`/product-detail/${product.id}`} className="text-decoration-none">
                                                <div className="card border-0 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                                    <Link to={`/CategoriesRestoran/${product.id}`} />
                                                    <img src={product.image} className="card-img-top FourCardImg p-5" style={{ height: 250 }} alt="..." />
                                                    <div className="card-body FourCardBody">
                                                        <h5 className="card-title FourCardTitle text-white">{product.title}</h5>
                                                        <h3 className="card-text text-white">
                                                            {product.price}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Link>



                                        </div>
                                    </>
                                )

                            })
                        }
                    </div>
                </div>

            </section>

        </>
    )
}

export default Allproducts