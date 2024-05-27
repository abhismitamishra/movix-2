import React from 'react'
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
    const { generes } = useSelector((state) => state.home);
    console.log(generes);
  return (
    <div className='genres'>
        {data?.map((g) => {
            if(!(generes[g]?.name)) return;        
            return (
                <div className="genre" key={g}>{generes[g]?.name}</div>
            )
        }) }
    </div>
  )
}

export default Genres