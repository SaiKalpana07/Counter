import React, { useState } from 'react';

function FirstCompo() {
    const data = ["apple","mango","berry","avocado","strawberry"]
    const[inputValue,setInputValue] = useState("")
    const[suggestions,setSuggestions] = useState([])
    const handleType = (event) => {
     let input = event.target.value
        console.log(input,"input")
        setInputValue(input)
        console.log(inputValue,"inputValue")
        if(input.trim() === ''){
            setSuggestions([])
        }
        else {
        const filteredSuggestions = data.filter((d)=>{console.log(d,typeof d,typeof input,'d')
           const correctMatch = d.toLowerCase().includes(input.toLowerCase())
           return correctMatch
        })
    
        console.log(filteredSuggestions,"suggestions")
        setSuggestions(filteredSuggestions)
    }
}

    const handleClick = () =>{
     setInputValue("")
    }

    return(
    <>
    <p>Hello First Compo!!</p>
    <input type="text" value={inputValue} onChange={handleType} />  <button onClick={handleClick}>Reset</button>
    <ul>
        {suggestions.length > 0 && suggestions.map((suggestion,index)=>(
            <li key={index}>{suggestion}</li>
        ))}
    </ul>
    </>
    )
}
export default FirstCompo;