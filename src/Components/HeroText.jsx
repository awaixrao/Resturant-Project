import React from 'react'
import ButtonOrder from './ButtonOrder'

const HeroText = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <h1 className='heroHeading text-white'>Fast Food Restaurant</h1>
                    <p className='text-white py-2'>
  Welcome to Aman Pizza Garden Duniyapur, where flavor meets freshness! Our fast food point offers a delightful array of pizzas made with the finest ingredients, ensuring every bite is a taste sensation. 
</p>
                    <ButtonOrder />

                </div>
            </div>
        </div>
        
    
    </>
  )
}

export default HeroText