import React,{useState} from 'react'

export default function AndhraBank(props) {
    let [name,setName]=useState("Kalyan")
    return (
        <div>
            {/* <h1>AndhraBank account for {props.info.firstName}</h1> */}
            <h1 onMouseEnter={()=>{setName("Kalyan Paladugu")}}>{name}</h1>
        </div>
    )
}
