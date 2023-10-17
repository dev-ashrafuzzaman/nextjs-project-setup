import React from 'react';

const ProductData = async() => {
    const res = await fetch(`http://localhost:5000/newss/` , {
      next:{
        revalidate: 5,
      }
    })
  return  res.json();
};

export default ProductData;

// revalidate ISR