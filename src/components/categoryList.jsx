import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadData } from "../utils/loadData";

const ListOfCategories = props => {
    return (
        <ul>
            {props.categories.map((category, id) => {
                return (
                    <li key={`category-${id}`}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                );
            })}
        </ul>
    )
}

class CategoryList extends Component {
    state = {
        categories: []
    }

    async componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        const categories = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        );
    
        this.setState({
            categories
        });
    };

    render() {
        const { categories } = this.state;
        return (
           <div>
               {categories ? (
                   <ListOfCategories categories={categories} />
               ) : (
                   <p>Fetching categories...</p>
               )}
           </div> 
        );
    }

}

export default CategoryList;