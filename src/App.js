import logo from './logo.svg';
// tailwindcss
import "./css/style.css"
import { useEffect, useRef, useState } from 'react';

function App() {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  }
  
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val])

  return (
    <div className='w-screen min-h-screen bg-neutral-950 grid place-items-center'>
      <div className='text-neutral-200 bg-neutral-800 p-2 w-[30rem] rounded flex flex-col space-y-2'>
        <span>Input text</span>
        <textarea className='p-1 bg-neutral-700 active:outline-none focus:outline-none rounded' placeholder='type something here' value={val} onChange={handleChange} rows="2" ref={textAreaRef}></textarea>
      </div>
    </div>
  );
}

export default App;
