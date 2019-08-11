import "../styles/index.css";
import Nav from './Nav'

const Page = ({children }) => {

  return (
    <div className="page">
      <Nav/>
      {children}
    </div>
  );
}

export default Page