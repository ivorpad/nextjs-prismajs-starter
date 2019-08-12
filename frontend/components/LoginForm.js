import { useState } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router'
import { GET_POSTS } from './Posts';
import { CURRENT_USER } from './Nav';

const REQUEST_LOGIN = gql`
  mutation REQUEST_LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
      id
    }
  }
`;

function LoginForm() {

  const [values, setValues] = useState({email: "ivor@ivor.com", password: "15981496"});

  const handleUserInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const {email, password} = values;
  
  return (
    <Mutation
      mutation={REQUEST_LOGIN}
      refetchQueries={[
        {query: GET_POSTS},
        {query: CURRENT_USER}
      ]}>
      {(login, { data, error, loading }) => {
        return (
          <div className="container h-screen flex mx-auto w-1/5">
            <form
              className="md:flex align-bottom p-6 shadow self-center w-full justify-center flex-col"
              onSubmit={e => {
                e.preventDefault();
                login({
                  variables: {
                    email: values.email,
                    password: values.password
                  }
                });
                Router.push("/");
              }}>
              <input
                type="text"
                onChange={handleUserInput}
                value={email}
                name="email"
                id="email"
                className="bg-gray-200 m-2 rounded-sm border-gray-300 border-solid border p-1"
              />
              <input
                type="password"
                onChange={handleUserInput}
                value={password}
                name="password"
                id="password"
                className="bg-gray-200 m-2 rounded-sm border-gray-300 border-solid border p-1"
              />
              <input
                type="submit"
                className="bg-blue-500 rounded w-20 p-1 self-center text-blue-100 shadow cursor-pointer hover:shadow-none"
              />
            </form>
          </div>
        );
      }}
    </Mutation>
  );
}

export default LoginForm;
