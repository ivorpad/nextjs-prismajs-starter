import React from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

const REQUEST_LOGOUT = gql`
  mutation REQUEST_LOGOUT {
    logout {
      message
    }
  }
`;

function LogOut() {
  return (
    <Mutation mutation={REQUEST_LOGOUT}>
      {(logout, {data, error, loading}) => {
        return <button onClick={() => {
          logout();
          Router.push("/login")
        }}>logout</button>
      }}
    </Mutation>
  )
}

export default LogOut
