import React from 'react'
import ProductRow from './ProductRow'
import './ProductTable.css'

function ProductTable({products}) {
    return (
        <table className='table'>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <ProductRow {...product} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProductTable