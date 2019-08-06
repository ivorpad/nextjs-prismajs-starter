import { useState } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router'
import { GET_POSTS } from './Posts';

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
        {
          query: GET_POSTS
        }
      ]}>
      {(login, { data, error, loading }) => {
        console.log(data, loading, error);
        return (
          <div>
            <form
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
              />
              <input
                type="password"
                onChange={handleUserInput}
                value={password}
                name="password"
                id="password"
              />
              <input type="submit" />
            </form>
          </div>
        );
      }}
    </Mutation>
  );
}

export default LoginForm;
