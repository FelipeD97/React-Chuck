import React, { useState, useEffect } from "react";
import { loadData } from "../utils/loadData";
import { Button } from "bloomer";

import "./quotes.css";

const Quote = (props) => {

    const [quote, setQuotes] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const category = props.match.params.category_name;

        setCategory(category);

        getQuote(category);

    }, [props.match.params.category_name]);

   const getQuote = async (category) => {

        const response = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = response.value;

        setQuotes(quote);
    };

   const refreshQuote = () => {
       getQuote(category);
   }

    return (
        <>
            <p className="quote-text">{quote}</p>
            <p>&nbsp;</p>
            <Button isColor='danger' isOutlined onClick={refreshQuote}>
                Get Another Quote from the {category} Category
            </Button>
        </>
    );
}

export default Quote;