import Link from "next/link";
import "../styles/index.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import cookie from "js-cookie";
import LogOut from "../components/LogOut";
import AuthLink from "../components/AuthLink";

const CURRENT_USER = gql`
  query {
    currentUser {
      name
      id
      email
    }
  }
`;

function Nav() {
  const isLogged = (data) => {

    if(data) {
      cookie.set("__logged_in_status", "true");
    }
  }

  return (
    <Query query={CURRENT_USER}>
      {({ data, error, loading, refetch }) => {

        const user = data?.currentUser;

        isLogged(user);
        const loggedIn = cookie.get("__logged_in_status") === "true";

        return (
          <nav className="flex justify-between main-nav bg-white shadow pb-3 pt-3">
            <div className="main-nav__secondary-links">
              <Link href="/features">
                <a className="ml-4">Features</a>
              </Link>
              <Link href="/about">
                <a className="ml-4">Other Pages</a>
              </Link>
              <AuthLink href="/new-post"> 
                <a className="ml-4">Add New Post</a>
              </AuthLink>
            </div>

            <div className="main-nav__profile pr-3">
              {!user && !loggedIn ? (
                <Link href="/login">
                  <a className="ml-4">Login</a>
                </Link>
              ) : (
                <LogOut />
              )}

              {user && (
                <small className="ml-10">
                  hello {user && user.name}
                </small>
              )}
            </div>
          </nav>
        );
      }}
    </Query>
  );
}

export default Nav
export { CURRENT_USER }