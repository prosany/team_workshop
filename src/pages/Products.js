import React from 'react';
import ProductDetails from '../components/ProductDetails'
import fakeProducts from '../data';

export default function Products() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    fakeProducts.map(product => <ProductDetails key={product.key} product={product} />)
                }
            </div>
        </div>
    )
}