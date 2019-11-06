import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, DropdownContent } from "bloomer";
import { loadData } from "../utils/loadData";

import "./categoryList.css";

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
           <Dropdown isHoverable>
               <DropdownTrigger>
                   <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu" className="dropdown-list">
                       <span>Categories</span>
                   </Button>
               </DropdownTrigger>
                <DropdownMenu>
                    <DropdownContent>
                        <DropdownItem isActive>
                           {categories ? (
                            <ListOfCategories categories={categories} />
                        ) : (
                                <p>Fetching categories...</p>
                            )} 
                        </DropdownItem>
                    </DropdownContent>
                </DropdownMenu>         
           </Dropdown> 
        );
    }

}

export default CategoryList;