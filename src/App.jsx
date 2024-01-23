import {uploadFile} from './firebase/config.jsx'
import {useState} from 'react'
function App() {
  const [file, setFile] = useState(null);
  
  const handlerSubmit = async (e) =>{
    e.preventDefault();
    const url = await uploadFile(file);
    console.log(url)
  }
  
  return (
    <>
      <h1>Firebase x React </h1>
      <form onSubmit={handlerSubmit}>
        <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])}/>
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default App
