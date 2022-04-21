import React from "react";
import {useState,useEffect} from "react";
import style from '../../css/app.module.css';


function AppAPI ({stopFullLoading}){
    const [Data , setData] = useState([]); 
     
    useEffect(()=>{ 
        fetch('/react')
            .then((res)=>res.json())
            .then((result)=>{
                setData(result);
                setTimeout(()=>{
                   stopFullLoading(); 
                },3000); 
            })
       },[]);
   
    return  <div><p className={style.fullLoadingText}>{!Data || Data.length === 0 ? 'loading your data' : JSON.stringify(Data)}</p></div> ;
}

   
            
export default AppAPI;
