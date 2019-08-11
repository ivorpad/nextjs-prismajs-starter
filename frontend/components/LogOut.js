import React from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { GET_POSTS } from "./Posts";
import { CURRENT_USER } from "./Nav";
import cookie from "js-cookie";

const REQUEST_LOGOUT = gql`
  mutation REQUEST_LOGOUT {
    logout {
      message
    }
  }
`;

function LogOut() {
  return (
    <Mutation mutation={REQUEST_LOGOUT} refetchQueries={[
      {query: CURRENT_USER},
      {query: GET_POSTS}
    ]}>
      {(logout, {data, error, loading}) => {
        return <button onClick={() => {
          logout();
          cookie.set("__logged_in_status", "false");
          // Router.push("/login")
        }}>Logout</button>
      }}
    </Mutation>
  )
}

export default LogOut
