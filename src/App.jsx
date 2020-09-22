import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Clock from 'react-digital-clock'
const App=()=>{
    const [num,setnum]=useState()
    const [name1,setname1]=useState()
    const [moves,setmoves]=useState()
    useEffect(()=>{
        async function getData(){
            let res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setname1(res.data.name)
            setmoves(res.data.moves.length)
        }
        getData()
    })
    return(<>
      
       <h1><Clock/></h1>
       <h1>You selected {num}</h1>
       <h1>my Name is {name1}</h1>
       <h1>Moves {moves}</h1>
        <select value={num} onChange={(e)=>{
            const op=e.target.value
            setnum(op)
        }}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='7'>7</option>
            <option value='23'>23</option>
            <option value='10'>10</option>
        </select>
    </>)
}

export default App