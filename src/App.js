import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";
import { Navbar, NavbarBrand, NavbarStart, NavbarItem, Image } from "bloomer";

import "bulma/css/bulma.css";
import "./App.css";

function App() {
    return (
      <div className="App">
        <Router>
          <Wrapper>
            <Navbar style={{ border: "solid 3px #00D1B2", margin: "0" }}>
              <NavbarBrand>
                <NavbarItem>
                  <Image isSize="32x32" src="chuckLogo.png" alt="" style={{marginRight: 5 }} />Chuck Reacts
                </NavbarItem>
              </NavbarBrand>
              <NavbarStart>
                <NavbarItem>
                  <Link to="/">Home</Link>
                </NavbarItem>
                <NavbarItem hasDropdown isHoverable className="dropdownMenu">
                  <Route path="/" exact>
                    <CategoryList />
                  </Route>
                </NavbarItem>
              </NavbarStart>
            </Navbar>
            <Route path="/category/:category_name" component={Quote} />
          </Wrapper>
        </Router>
      </div>
    );
}

export default App;
