import React from 'react'

class SearchBar extends React.Component{
    // state = {
    //!     name:'' This getts the user inputs from the handleChange() that allows us to pass up the information
    // }

    // handleChange = (event) => {
    //     let { name, value } = event.target;
    //     this.setState({
    //         [name] : value
    //     })
    // }

    render() {
        return(
            <form>
                <label>Search bar</label>
                <input type='text' name='name' onChange={this.props.handleChange}/> 
            </form>
        )
    }
}


export default SearchBar