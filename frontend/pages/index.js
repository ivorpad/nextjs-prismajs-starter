import { useState } from 'react';
import '../styles/index.css'

function Home() {

  const [value, setValue] = useState('some another');


  return <div><h1>Hello world {value}</h1></div>
}

export default Home;