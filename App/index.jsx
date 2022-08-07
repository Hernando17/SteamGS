import React from "react";
import AuthStore from "../App/Service/Auth/store";
import { Provider } from "react-redux";
import Router from "../App/Router/index";

const index = () => {
  return (
    <Provider store={AuthStore}>
      <Router />
    </Provider>
  );
};

export default index;
