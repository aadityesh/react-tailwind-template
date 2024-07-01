import { useEffect, useState } from "react";


const BASE_URL = "";

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setisOpen] = useState(false);

 
  return (
    <>
      <div className="mx-auto text-8xl">
        Hello World
      </div>
    </>
  );
}

export default App;
