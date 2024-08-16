import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import LayoutWrapper from "./Layout/LayoutWrapper";
import AddListings from "./Containers/AddListings";
import About from "./Containers/About";
import Register from "./Containers/Admin/Register";
import Login from "./Containers/Admin/Login";
import Products from "./Containers/Products";
import "./App.less";
import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <div>
      <Switch>
        <LayoutWrapper>
          <Route path="/about" exact component={About} />
          <Route path="/auth/register" exact component={Register} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/products" exact component={Products} />
          <Route path="/" exact component={Products} />
          <Route path="/products/create" component={AddListings} exact />
          <Route
            path="/products/create"
            exact
            render={(props) => {
              const accessToken = Cookies.get("accessToken");
              return accessToken ? (
                <Redirect to="/products/create" />
              ) : (
                <Redirect to="/auth/login" />
              );
            }}
          />
          <Route path="/products/list/:id" exact component={ProductDetails} />
        </LayoutWrapper>
      </Switch>
    </div>
  );
}

export default App;
