import {useState,useEffect} from 'react';
import axios from "axios";
function LoadImages(){
    const [state, setState] = useState([])
    
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/photos?client_id=8kTmvSURXf6i0pNLUqDZigjRE_RFfzPcPEWfS5OOf68")
        .then((data)=>{
            setState(data.data)
        })
    })
    return state;

}

function SearchImages(query){
    const [state, setState] = useState([])
    
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=8kTmvSURXf6i0pNLUqDZigjRE_RFfzPcPEWfS5OOf68")
        .then((data)=>{
            setState(data.data.results)
        })
    }, [query])
    return state;

}

export {LoadImages, SearchImages}