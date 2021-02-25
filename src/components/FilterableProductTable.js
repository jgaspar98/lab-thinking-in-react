import React from 'react';
import './FilterableProductTable.css'
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class  FilterableProductTable extends React.Component {
    state = {
        products: this.props.products,
        name: ''
    }   

    // searchHandler = (search)=>{
    //     this.setState({
    //         search: search
    //     })
    // }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        const { products } = this.state;
        const filtered = products.filter(product => {
            return product.name.toLowerCase().includes(this.state.name)
        })
        return (
            <div> 
                <SearchBar handleChange={this.handleChange}/>
                <ProductTable products={filtered}/>
            </div>
        )
    }

}

export default FilterableProductTable