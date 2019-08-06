import Posts from "../components/Posts";
import Nav from '../components/Nav';
import LogOut from '../components/LogOut'
function Home() {
  return (
    <div>
      <Nav />
      <h1>Hello world</h1>
      <LogOut />
      <Posts />
    </div>
  );
}

export default Home;