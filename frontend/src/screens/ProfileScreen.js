import React, { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <div className="container small-container">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
    </div>
  );
}
