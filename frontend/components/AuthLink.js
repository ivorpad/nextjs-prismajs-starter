import Link from "next/link";
import cookie from "js-cookie";


function AuthLink(props) {
  const loggedIn = cookie.get("__logged_in_status") === "true";
 
  if(!loggedIn) return null;

 return <Link {...props}>
  {props.children}
 </Link>
}

export default AuthLink;