import React from 'react'

function ProductRow({name, price, stocked}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}


export default ProductRow