import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class CategoryList extends Component {
    state = {

    };

    async componentDidMount() {
        thid.getCategory();
    }

    getCategory = async () => {
        const categories = await loadData(
            `https://api.chucknorris.io/jokes/random?category`
        );
    
        this.setState({
            categories
        });
    };

}

export default CategoryList;