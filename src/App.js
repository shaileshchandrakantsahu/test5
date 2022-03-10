import { useState } from 'react';
import {LoadImages,SearchImages} from './component/Api';
import Image from './component/image';
import './App.css'

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages();
   
  const search = (query)=> {
    setSearch(query)
  }
  const searchData = SearchImages(query);
  console.log(SearchImages(searchQ))
  return (
    <div className="App"> 
    <h1 id="head"> Snap Shot</h1>
    <div className="b">
      <input type="text" onChange={(event)=>setQuery(event.target.value)} />
      <button onClick={search}>Search</button>
    </div>
    {/* <div>
    <button onClick={search}>Search</button>
    <button onClick={search}>Search</button>
    <button onClick={search}>Search</button>
    <button onClick={search}>Search</button>
    </div> */}
    <div className='center'>
    <div className='conatin'>
    
     {searchQ ? searchData.map((img,key) => (
      <Image src={img.urls.thumb } key={key}/>))  :
      data.map((img,key) => (
      <Image src={img.urls.thumb } key={key}/>)) }
    </div>
    </div>
    </div>
  );
}

export default App;
