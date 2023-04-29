import React from 'react'
import './Picture.css'

const Picture = () => {
    return (
      //BEM 
    <div className="picture">
        <img 
            className='picture__logo'
            src='https://external-preview.redd.it/Pxa7Wj3paDp8_1KTInOqyRAEsRvmNaYJlp3i4QXbup4.png?width=640&crop=smart&auto=webp&s=f7c03d14d5299481297a180ce06d9af8100340ec'
            alt='got'
        />
        <div className="picture__text1">
            <h3>That Special Moment</h3>
        </div>
        <div className="picture__text2">
            <p>When you find the perfect avocado at the supermarket</p>
        </div>
    </div>
  )
}

export default Picture